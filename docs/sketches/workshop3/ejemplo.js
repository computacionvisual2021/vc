const randomIn = (min,max) => Math.floor(Math.random()*(max-min))+min;
const gameWidth=700;
const gameHeight=420;
const minLeafSize=10;
const desiredNumberOfLeaves=1000;

let Container = function(x1, y1, x2, y2) {
  this.x1=x1;
  this.y1=y1;
  this.x2=x2;
  this.y2=y2;
}

let Leaf = function(x, y, width, height) {
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.left=null;
  this.right=null;
  this.container=null;
}

Leaf.prototype.addContainer = function() {
  let width=Math.floor(randomIn(0.7, 0.9)*this.width);
  let height=Math.floor(randomIn(0.7, 0.9)*this.height);
  let xPos=Math.floor(this.x+(this.width-width)/2);
  let yPos=Math.floor(this.y+(this.height-height)/2);
  this.container=new Container(xPos, yPos, xPos+width, yPos+height);
}

Leaf.prototype.drawSelf = function(ctx) {
  let C=this.container;
  ctx.strokeStyle='black';
  ctx.strokeWidth='2';
  ctx.stroke();
  ctx.strokeRect(C.x1, C.y1, C.x2-C.x1, C.y2-C.y1);
}

Leaf.prototype.splitLeaf = function() {
  let splitVertical;
  if (this.width/this.height>=1.5) { splitVertical=true; }
  else { splitVertical=false; }

  let max = (splitVertical ? this.width : this.height)-minLeafSize;
  if (max <= 2*minLeafSize) { return false; }

  let splitLoc=randomIn(minLeafSize, max-minLeafSize);
  if (splitVertical) {
    this.left=new Leaf(this.x, this.y, splitLoc, this.height);
    this.right=new Leaf(this.x+splitLoc, this.y, this.width-splitLoc, this.height);
  }
  else {
    this.left=new Leaf(this.x, this.y, this.width, splitLoc);
    this.right=new Leaf(this.x, this.y+splitLoc, this.width, this.height-splitLoc);
  }
  return true;
}

Leaf.prototype.getLeafs = function() { return (!this.left&&!this.right) ? [this] : [].concat(this.left.getLeafs(), this.right.getLeafs()); }

function redrawCanvas(ctx) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, gameWidth, gameHeight);
  ctx.translate(0.5, 0.5);
  /* CREATE LEAVES */
  let root = new Leaf(0,0,gameWidth, gameHeight);
  let leafLitter=[root];
  let didSplit=true;
  while (didSplit) {
    didSplit=false;
    leafLitter.forEach((leaf)=>{
      if (leaf.left===null&&leaf.right===null) {
        if (leaf.splitLeaf()&&leafLitter.length<desiredNumberOfLeaves) {
          leafLitter.push(leaf.left, leaf.right);
          didSplit=true;
        }
      }
    });
  }

  // DRAW CONTAINERS INSIDE LEAVES
  let leaves=root.getLeafs();
  leaves.forEach(function(leaf) {
    leaf.addContainer();
    leaf.drawSelf(ctx);
  });
  console.log(leaves.length);
}

window.onload = function() {
  const cvs=document.getElementById('board');
  const ctx=cvs.getContext('2d');
  redrawCanvas(ctx);
  setInterval(function() {
    redrawCanvas(ctx);
  }, 1000);
}