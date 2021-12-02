import anime from 'animejs'

export class vSlide {
    children: HTMLCollection|[] = [];
    container: HTMLElement|null = null;
    totalHeight: number = 0;
    itemHeight: number = 0;
    duration: number = 1000;
    keyframes: any[] = [];
    itemDuration: number = 0;

    constructor (parent: HTMLElement) {
        this.children = parent.getElementsByClassName ("v-slide-item")
        this.container = <HTMLElement>parent.getElementsByClassName ("v-slide-container")[0]
        this.totalHeight = this.container.offsetHeight
        this.itemHeight = (this.totalHeight / this.children.length)
        this.itemDuration = this.duration / this.children.length
    }

    makeKeyframes = () => {
        let lastOffset = 0;
        if (!this.children) return
        
        for (let x = 0; x < this.children.length; x++) {
            const offset = -(x * this.itemHeight);
            this.keyframes.push(
                {translateY: [`${lastOffset}px`, `${offset}px`]}
            )
            lastOffset = offset;
        }
        this.keyframes.shift()
    }

    start = () => {
        this.makeKeyframes ();
        
        let tl = anime.timeline({loop: true})
        tl.add ({
            targets: this.container,
            keyframes: this.keyframes,
            duration: this.duration,
        })
        tl.add ({
            targets: this.container,
            translateY: `${this.itemHeight}px`,
            easing: 'linear',
            duration: 1
        })
        tl.add ({
            targets: this.container,
            duration: this.duration / this.children.length,
            translateY: [`${this.itemHeight}px`, 0]
        })

    }
}