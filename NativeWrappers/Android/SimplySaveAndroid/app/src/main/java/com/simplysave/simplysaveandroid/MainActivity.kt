package com.simplysave.simplysaveandroid

import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.webkit.*
import androidx.webkit.WebResourceErrorCompat
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat
import androidx.webkit.WebViewCompat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .addPathHandler("/static/", WebViewAssetLoader.ResourcesPathHandler(this))
            .build()

        val webView = findViewById<WebView>(R.id.webview)
        webView.webChromeClient = MyWebChromeClient()
        webView.webViewClient = LocalContentWebViewClient(assetLoader)
        webView.settings.javaScriptEnabled = true

        webView.loadUrl("https://appassets.androidplatform.net/assets/index.html")
    }
}

private class LocalContentWebViewClient(private val assetLoader: WebViewAssetLoader) : WebViewClientCompat() {

    override fun shouldInterceptRequest(
        view: WebView,
        request: WebResourceRequest
    ): WebResourceResponse? {
        val url = Uri.parse(request.url.toString().replace("/static/", "/assets/static/"))
        Log.d("MyApplication", url.toString())
        return assetLoader.shouldInterceptRequest(url)
    }

    override fun onReceivedError(
        view: WebView,
        request: WebResourceRequest,
        error: WebResourceErrorCompat
    ) {
        Log.d("MyApplication", "received error: $error ${error.description}")
        super.onReceivedError(view, request, error)
    }
}

private class MyWebChromeClient: WebChromeClient() {
    override fun onConsoleMessage(message: ConsoleMessage?): Boolean {
        if (message != null) {
            val level = message.messageLevel().name
            Log.d("MyApplication", "${level}: ${message.message()} -- From line " +
                    "${message.lineNumber()} of ${message.sourceId()}")
        }
        return true
    }
}

