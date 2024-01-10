export const createAvatar = (name: string) => {
    let initials: string = "";
    const nameSplitted: string[] = name.split(" ");
    for (let i = 0; i < nameSplitted.length; i++) {
      if (nameSplitted[i] == "Dr." || nameSplitted[i] == "Ms.") continue;
      initials += nameSplitted[i][0];
    }
    return initials;
}