class macosBtn {
	constructor(txt, type, href, id) {
		this.label = txt;
		this.type = type;
		this.href = href;
		this.id = id;
	}
	getHtml() {
		if (this.label=="") {
			console.log("macosbtn error: name is empty");
		} else {
			if (this.type==1) {
		return '<div id="'+this.id+'" class="macosBtn noselect">\
	<div class="macosBtnBgMain">\
		<a href="'+this.href+'" class="reset"><div class="macosBtnContentMain">'+this.label+'</div></a>\
	</div>\
</div>';
			} else if (this.type==2) {
		return '<div id="'+this.id+'" class="macosBtn noselect">\
	<div class="macosBtnBgSecondary">\
		<a href="'+this.href+'" class="reset"><div class="macosBtnContentSecondary">'+this.label+'</div></a>\
	</div>\
</div>';
			} else {
				console.log("macosbtn error: " + this.name + " btn type is invalid");
			}
		}
	}
}