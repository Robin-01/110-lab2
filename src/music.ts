const music_styles: string[] = ["Rock", "Pop", "Jazz", "Classical"];

export function printMusicStyles(): void {
    music_styles.forEach((style) => {
        console.log(style);
    });
}

printMusicStyles();