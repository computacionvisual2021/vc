<script type="text/javascript" src="dist/aalib.js"></script>

var imageAscii = new p5((p) => {
    
    p.aalib.read.image.fromURL("/vc/docs/sketches/lenna.png")
        .map(p.aalib.aa({ width: 530, height: 160 }))
        .map(p.aalib.render.html({ background: "#fff", fontFamily: "Ubuntu Mono, monospace" }))
        .subscribe();
}, "sketch");