using SimplySaveWindows.DataTransfer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimplySaveWindows
{
    public class Api
    {
        private readonly Config config;

        public Api(Config config)
        {
            this.config = config;
        }

        public ConfigData LoadConfig()
        {
            return new ConfigData()
            {
                DataDirPath = config.SaveFilesDir,
                Sort = config.Sort
            };
        }

        public void SaveConfig(ConfigData data)
        {
            config.SaveFilesDir = data.DataDirPath;
            config.Sort = data.Sort;
            config.Save();
        }

    }
}
