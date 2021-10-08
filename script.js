let tree = {
    title: "Hayastan",
    children: [{
            title: "Shirak",
            children: [
                { title: "Gyumri", children: [{ title: "Slabodka", children: null }] },
            ],
        },
        {
            title: "Tavush",
            children: [{
                title: "Ijevan",
                children: [{ title: "Eritasardakan", children: null }],
            }, ],
        },
        {
            title: "Lori",
            children: [
                { title: "Vanadzor", children: [{ title: "Dimac", children: null }] },
            ],
        },
        { title: "Aragacotn", children: [{ title: "Ashtarak", children: null }] },
        { title: "Armavir", children: [{ title: "Armavir", children: null }] },
        { title: "Ararat", children: [{ title: "Artashat", children: null }] },
        { title: "Syunik", children: [{ title: "Kapan", children: null }] },
        {
            title: "Vayots dzor",
            children: [{
                title: "Yeghegnadzor",
                children: [{
                    title: "Mikoyan",
                    children: [{ title: "Noric Nor", children: null }],
                }, ],
            }, ],
        },
        { title: "Gexarquniq", children: [{ title: "Gavar", children: null }] },
        { title: "Yerevan", children: null },
        { title: "Kotayk", children: [{ title: "Hrazdan", children: null }] },
    ],
};

function drawTree(tree) {
    let root = document.querySelector("." + tree.title.replace(/ /g, ""));
    root.previousElementSibling.addEventListener("click", (event) => {
        event.target.nextElementSibling.classList.toggle("active");
    });

    tree.children.forEach((child) => {
        if (child.children) {
            let newTree = document.createElement("li");
            let name = document.createElement("span");
            name.classList.add("caret");
            name.innerHTML = child.title;
            newTree.append(name);
            let newList = document.createElement("ul");
            newList.classList.add(child.title.replace(/ /g, ""));
            newTree.append(newList);
            root.append(newTree);
            drawTree(child);
        } else {
            let newName = document.createElement("li");
            newName.innerHTML = child.title;
            root.append(newName);
        }
    });
}
drawTree(tree);