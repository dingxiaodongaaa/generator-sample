// 此文件作为Generator的入口
// 需要导出一个继承自Yeoman Generator 的类型
// Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入

const Generator = require("yeoman-generator")

module.exports = class extends Generator {
    prompting () {
        // Yeoman 在询问用户环节会自动调用此方法
        // 在此方法中可以调用父类的 prompt() 方法发出对用户的命令行询问
        return this.prompt([
            {
                type:'input',
                name: 'title',
                message: 'Your project name',
                default: this.appname // appname 为项目生成目录名称
            }
        ]).then(answers => {
            // answers => { name: 'user input value' }
            console.log(answers)
            this.answers = answers
        })
    }

    writing () {
        // Yeoman 自动生成文件的阶段调用此方法
        // 我们可以通过文件读写的方式往目录中写文件
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     '这是文件内容'
        // )

        // // 模板文件路径
        // const tmpl = this.templatePath("foo.txt")
        // // 输出文件路径
        // const output = this.destinationPath("foo.txt")
        // // 模板数据上下文
        // const context = { title: 'hello xiaodong', success: true}
        
        // this.fs.copyTpl(tmpl, output, context)

        const tmpl = this.templatePath("bar.html")
        const output = this.destinationPath("bar.html")
        const context = this.answers

        this.fs.copyTpl(tmpl, output, context)

    }
}