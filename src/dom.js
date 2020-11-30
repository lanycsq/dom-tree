window.dom = {
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.div(div,'color','red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // dom.div(div,'color')
                return node.style[name]
            } else if (name instanceof Object) {
                //dom.style(div,{color:'red',border:'1px solid red'})
                for (let key in name) {
                    node.style[key] = name[key]
                }
            }
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    // 用于新增弟弟
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    //用于新增哥哥
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    //
    append(parent, node) {
        parent.appendChild(node)
    },
    //新增一个爸爸
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    remove(node) {
        node.parentNode.removeChild(node);
        return node
    },
    empty(node) {
        const {
            childNodes
        } = node;
        const array = []
        let x = node.firstChild;
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild;
        }
        return array
    },
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, string) { //适配
        if (arguments.length === 2) {
            if ('innerText' in node) { //ie
                node.innerText = string;
            } else { //chrome
                node.textContent = string;
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) { //ie
                return node.innerText
            } else { //chrome
                return node.textContent
            }
        }

    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },

    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },

    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children;
    },
    sublings(node) {
        return Array.from(node.parentNode.children)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },

    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
}