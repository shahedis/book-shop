module.export = {
    css: {
        loaderOptions: {
            css: {
                prependDta: `
                    @import "@/scss/variables.scss";
                    @import "@/scss/mixins.scss";
                    @import "@/scss/functions.scss";
                `
            }
        }


    }
}