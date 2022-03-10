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
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
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

                string indexFile = Path.Join(Directory.GetCurrentDirectory(), "bundle", "index.html");
                webView.CoreWebView2.Navigate("file:///" + indexFile);
            }
            catch (Exception)
            {
                //TODO: automatically download and run installer
                MessageBox.Show("Missing WebView2 Runtime. Download here: https://go.microsoft.com/fwlink/p/?LinkId=2124703");
                this.Close();
                return;
            }
        }

        private void CoreWebView2_NewWindowRequested(object sender, CoreWebView2NewWindowRequestedEventArgs e)
        {
            e.Handled = true;
            Process.Start("explorer", e.Uri);
        }
    }
}
