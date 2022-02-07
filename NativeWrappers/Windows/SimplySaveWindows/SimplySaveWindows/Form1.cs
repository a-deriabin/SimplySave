using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
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
                await webView.EnsureCoreWebView2Async();

                webView.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;

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

    }
}
