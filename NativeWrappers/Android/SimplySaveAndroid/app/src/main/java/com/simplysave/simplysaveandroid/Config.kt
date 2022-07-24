package com.simplysave.simplysaveandroid

import com.simplysave.simplysaveandroid.dataTransfer.AndroidConfigData
import kotlinx.serialization.json.Json
import kotlinx.serialization.serializer
import java.io.File

class Config(val configDir: String) {
    var data: AndroidConfigData = AndroidConfigData("TODO", "alphabet")

    init {
        val configFile = File(configDir, "config.json")
        if (!configFile.exists())
            save()
        else {
            val jsonText = configFile.readText()
            data = Json.decodeFromString(serializer(), jsonText)
        }
    }

    fun save() {
        val configFile = File(configDir, "config.json")
        val jsonText = Json.encodeToString(serializer(), data)
        configFile.writeText(jsonText)
    }
}
