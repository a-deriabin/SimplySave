using Microsoft.Web.WebView2.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SimplySaveWindows
{
    public partial class Form1 : Form
    {
        private Config config = new Config();

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            this.Width = config.Data.WindowWidth;
            this.Height = config.Data.WindowHeight;

            RunApp();
        }

        private async void RunApp()
        {
            try
            {
                var op = new CoreWebView2EnvironmentOptions("--disable-web-security");
                var env = await CoreWebView2Environment.CreateAsync(null, null, op);
                await webView.EnsureCoreWebView2Async(env);

                webView.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
                webView.CoreWebView2.NewWindowRequested += CoreWebView2_NewWindowRequested;
                webView.CoreWebView2.WebResourceRequested += CoreWebView2_WebResourceRequested;
                
                webView.CoreWebView2.AddWebResourceRequestedFilter("*", CoreWebView2WebResourceContext.All);

                var api = new Api(config);
                var interopObject = new InteropObject(api, this);
                webView.CoreWebView2.AddHostObjectToScript("dotnet", interopObject);

                webView.CoreWebView2.Navigate("file:///index.html");
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.StackTrace);
                MessageBox.Show(e.Message);
                //TODO: automatically download and run installer
                MessageBox.Show("Might be missing WebView2 Runtime. Download here: https://go.microsoft.com/fwlink/p/?LinkId=2124703");
                this.Close();
                return;
            }
        }

        private void CoreWebView2_WebResourceRequested(object sender, CoreWebView2WebResourceRequestedEventArgs e)
        {
            if (!e.Request.Uri.StartsWith("file:///"))
                return;

            string uri = e.Request.Uri;
            string relativePath = uri == "file:///index.html" ? "index.html" : uri.Substring("file:///".Length);
            string fullPath = "file:///" + Path.Join(Directory.GetCurrentDirectory(), "bundle", relativePath);
            e.Request.Uri = fullPath;
        }

        private void CoreWebView2_NewWindowRequested(object sender, CoreWebView2NewWindowRequestedEventArgs e)
        {
            e.Handled = true;
            Process.Start("explorer", e.Uri);
        }

        public string OpenFolderDialog()
        {
            if (folderBrowserDialog1.ShowDialog() == DialogResult.OK)
                return folderBrowserDialog1.SelectedPath;
            return null;
        }

        private void Form1_ResizeEnd(object sender, EventArgs e)
        {
            if (config.Data.WindowWidth == this.Width && config.Data.WindowHeight == this.Height)
                return;

            config.Data.WindowWidth = this.Width;
            config.Data.WindowHeight = this.Height;
            config.Save();
        }
    }
}
