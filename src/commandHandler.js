const fs = require('fs');
module.exports = async (client) => {
    const folder = await fs.readdirSync('./Commands').filter(file => !file.endsWith('.js'));
    for (const folderName of folder) {
        const files = await fs.readdirSync(`./Commands/${folderName}`).filter(file => file.endsWith('.js'));
        for (const fileName of files) {
            try {
                const command = require(`../Commands/${folderName}/${fileName}`);
                client.commands.set(command.name, command);
                for (const alias of (command.aliases || [])) {
                    client.aliases.set(alias, command.name);
                }
                console.log(`Registered command ${command.name}`);
            } catch (e) {
                console.log(`Failed to register command ${fileName}`);
                console.log(e);
            }
        }
    }
}