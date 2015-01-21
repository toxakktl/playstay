function drawcolor(element, width, height, color, hvcolor, icon, iconsize, iconcolor, parent, animateitem, timeout, hlink, target) {
		var xwidth = 0;
		var yheight = 0;
		var radius = 0;
		
		xwidth = width/2;
		yheight = height/2.8;
		radius = xwidth - 5;
		
        var stage = new Kinetic.Stage({
          container: element,
          width: width,
          height: height
        });
		
        var layer = new Kinetic.Layer();

		var colorPentagon = new Kinetic.RegularPolygon({
          x: xwidth,
          y: yheight,
          sides: 6,
          radius: radius - 12,
          fill: color,
          stroke: color,
          strokeWidth: 20,
          draggable: false,		  
          lineJoin: 'round'
        });		
				
		var text = new Kinetic.Text({
			x: xwidth,
			y: yheight,
			fontFamily: 'Flaticon',
			fontSize: iconsize,
			text: String.fromCharCode(icon),
			fill: iconcolor,
			align: 'center',			
		});
		
		text.offsetX(text.width()/2);
		text.offsetY(text.height()/2);
		
		var line = new Kinetic.Line({
		  points: [0,height/4, 0,0],
		  x: xwidth,
		  y: width - 10,
		  stroke: color,
		  strokeWidth: 3
		});		
		
		var circle = new Kinetic.Circle({
		  x: xwidth,
		  y: height - 14,
		  radius: 7,
		  fill: color,		 
		});
		
		colorPentagon.on('click touchstart', function() {
		  if( hlink != '' && hlink != "undefined" ) {			
		  	window.open(hlink, target);
		  }
        });
		
		text.on('click touchstart', function() {
		  if( hlink != '' && hlink != "undefined" ) {
		  	window.open(hlink, target);
		  }
        });
	
		colorPentagon.on('mouseover touchstart', function() {
		  if( hvcolor != '' ) {
		  	this.fill(hvcolor);
			this.stroke(hvcolor);
		  }		  
		  line.stroke(hvcolor);
		  circle.fill(hvcolor);
          layer.draw();		 	  
        });
		
        colorPentagon.on('mouseout touchend', function() {
          if( color != '' ) {
		  	this.fill(color);
			this.stroke(color);
		  }		 
		  line.stroke(color);
		  circle.fill(color);
          layer.draw();
        });
		
		text.on('mouseover touchstart', function() {
		  if( hvcolor != '' ) {
		  	colorPentagon.fill(hvcolor);
			colorPentagon.stroke(hvcolor);
		  }		 
		  line.stroke(hvcolor);
		  circle.fill(hvcolor);
          layer.draw();		  
        });
		
		text.on('mouseout touchend', function() {
		  if( color != '' ) {
		  	colorPentagon.fill(color);
			colorPentagon.stroke(color);
		  }		 
		  line.stroke(color);
		  circle.fill(color);
          layer.draw();		 
        });	
		
		layer.add(colorPentagon);
		layer.add(text);
		layer.add(line);
		layer.add(circle);
		layer.draw();
		
		if( timeout != '' && timeout != "undefined" ) {
			setTimeout(function(){			
				stage.add(layer);
				layer.draw();
			}, timeout);			
		} else {
			setTimeout(function(){			
				stage.add(layer);
				layer.draw();
			}, 1000);	
		}
				
		var tween = new Kinetic.Tween({
			node: colorPentagon, 
			duration: 2,			
			rotation: 360,
			easing: Kinetic.Easings.StrongEaseInOut,
			opacity: 1,
      	});
		
		var tween1 = new Kinetic.Tween({
			node: text, 
			duration: 2,			
			rotation: 360,
			easing: Kinetic.Easings.StrongEaseInOut,
			opacity: 1,
      	});
		
		$( "."+ parent + " ."+ element ).each(function() {
			var have_elem = $(this).find(element);
			if( have_elem ) {
				$( "."+ parent + " ."+ element ).hover(function() {
					if( animateitem == "both" ) {
						tween.play();
						tween1.play();
					} else if( animateitem == "text" ) {
						tween1.play();
					} else if( animateitem == "shape" ) {
						tween.play();
					} else if( animateitem == "color" ) {
						  if( hvcolor != '' ) {
							colorPentagon.fill(hvcolor);
							colorPentagon.stroke(hvcolor);
						  }						 
						  line.stroke(hvcolor);
						  circle.fill(hvcolor);						 
						  layer.draw();						
					}
				});
				$( "."+ parent + " ."+ element ).mouseleave(function() {								
					if( animateitem == "both" ) {
						tween1.reverse();
						tween.reverse();
					} else if( animateitem == "text" ) {
						tween1.reverse();
					} else if( animateitem == "shape" ) {
						tween.reverse();
					} else if( animateitem == "color" ) {
						  if( color != '' ) {
							colorPentagon.fill(color);
							colorPentagon.stroke(color);
						  }						  
						  line.stroke(color);
						  circle.fill(color);
						  layer.draw();
					}
				});
			}
		});		
}

function drawinfograph(element, width, height, brcolor, border, scborder, icon, iconsize, iconcolor, iconbgcolor, pointcolor, pointhvcolor, ctext1, ctext2, ctext3, ctext4, ctext5, originalw, originalh) {	

		var xwidth = 0;
		var yheight = 0;
		var radius = 0;
		
		xwidth = width/2;
		yheight = height/2;
		radius = xwidth - 5;
		
		 var stage = new Kinetic.Stage({
			container: element,
			width: width,
			height: height		  
        });
								
        var layer = new Kinetic.Layer();
		var smlayer = new Kinetic.Layer();
		var mdlayer = new Kinetic.Layer();
		var lglayer = new Kinetic.Layer();
		var tooltipLayer = new Kinetic.Layer();
		
		var smallcircle = new Kinetic.Circle({
		  x: stage.getWidth()/2,
		  y: stage.getHeight()/2,
		  radius: (stage.getWidth()/2)/4.8,
		  fill: iconbgcolor,
		  stroke: brcolor,
		  strokeWidth: scborder
		});
		
		var text = new Kinetic.Text({
			x: stage.getWidth()/2,
			y: stage.getHeight()/2,
			fontFamily: 'FontAwesome',
			fontSize: iconsize,
			text: String.fromCharCode(icon),
			fill: iconcolor,
			align: 'center',			
		});
		
		text.offsetX(text.width()/2);
		text.offsetY(text.height()/2);
		
		var mediumcircle = new Kinetic.Circle({
			x: stage.getWidth()/2,
			y: stage.getHeight()/2,
			radius: (stage.getWidth()/2)/1.85,		  
			stroke: brcolor,
			strokeWidth: border
		});
		
		var largecircle = new Kinetic.Circle({
			x: stage.getWidth()/2,
			y: stage.getHeight()/2,
			radius: (stage.getWidth()/2) - 10,		  
			stroke: brcolor,
			strokeWidth: border
		});
		
		if( width <= 400 && width > 330 ) {
			
			var pointcircle1 = drawcircle(mediumcircle.width() - 40, largecircle.height()/4, 14, pointcolor);
			var tooltip1 = drawtooltip(mediumcircle.width() - 40, largecircle.height()/3.8, ctext1, 'up', largecircle.width() - mediumcircle.width()/2 - 15, 100);
			
			var pointcircle2 = drawcircle(largecircle.width() - mediumcircle.width()/2.3, largecircle.height()/4 + 40, 14, pointcolor);		
			var tooltip2 = drawtooltip(largecircle.width() - mediumcircle.width()/2.2, largecircle.height()/4 + 40, ctext2, 'right', largecircle.width() - mediumcircle.width()/2 - 15, 100);
			
			var pointcircle3 = drawcircle(mediumcircle.width()/2, largecircle.height()/1.5, 14, pointcolor);		
			var tooltip3 = drawtooltip(mediumcircle.width()/1.9, largecircle.height()/1.5, ctext3, 'left', largecircle.width() - mediumcircle.width()/2 - 15, 100);
			
			var pointcircle4 = drawcircle(largecircle.width()/10, largecircle.height()/1.28, 14, pointcolor);		
			var tooltip4 = drawtooltip(largecircle.width()/9, largecircle.height()/1.28, ctext4, 'left', largecircle.width() - mediumcircle.width()/2 - 15, 100);
			
			var pointcircle5 = drawcircle(largecircle.width()/2 + 60, largecircle.height() + 5, 14, pointcolor);		
			var tooltip5 = drawtooltip(largecircle.width()/2 + 60, largecircle.height() - 1, ctext5, 'down', largecircle.width() - mediumcircle.width()/2 - 15, 100);
		}
		
		else if( width <= 330 && width > 300 ) {
			
			var pointcircle1 = drawcircle(mediumcircle.width() - 40, largecircle.height()/4, 14, pointcolor);
			var tooltip1 = drawtooltip(mediumcircle.width() - 40, largecircle.height()/3.9, ctext1, 'up', largecircle.width() - mediumcircle.width()/2 - 15, 100);
			
			var pointcircle2 = drawcircle(largecircle.width() - mediumcircle.width()/2.6, largecircle.height()/4 + 40, 14, pointcolor);		
			var tooltip2 = drawtooltip(largecircle.width() - mediumcircle.width()/2.4, largecircle.height()/4 + 40, ctext2, 'right', largecircle.width() - mediumcircle.width()/2 - 15, 100);
			
			var pointcircle3 = drawcircle(mediumcircle.width()/2, largecircle.height()/1.5, 14, pointcolor);		
			var tooltip3 = drawtooltip(mediumcircle.width()/1.9, largecircle.height()/1.5, ctext3, 'left', largecircle.width() - mediumcircle.width()/2 - 15, 100);
			
			var pointcircle4 = drawcircle(largecircle.width()/10, largecircle.height()/1.28, 14, pointcolor);		
			var tooltip4 = drawtooltip(largecircle.width()/9, largecircle.height()/1.28, ctext4, 'left', largecircle.width() - mediumcircle.width()/2 - 15, 100);
			
			var pointcircle5 = drawcircle(largecircle.width()/2 + 60, largecircle.height() + 5, 14, pointcolor);		
			var tooltip5 = drawtooltip(largecircle.width()/2 + 60, largecircle.height() - 1, ctext5, 'down', largecircle.width() - mediumcircle.width()/2 - 15, 100);
		}
		
		else if( width <= 300 ) {
			
			var pointcircle1 = drawcircle(mediumcircle.width() - 40, largecircle.height()/4, 14, pointcolor);
			var tooltip1 = drawtooltip(mediumcircle.width() - 40, largecircle.height()/3.8, ctext1, 'up', largecircle.width() - mediumcircle.width()/2 - 15, 120);
			
			var pointcircle2 = drawcircle(largecircle.width() - mediumcircle.width()/2.6, largecircle.height()/4 + 40, 14, pointcolor);		
			var tooltip2 = drawtooltip(largecircle.width() - mediumcircle.width()/2.4, largecircle.height()/4 + 40, ctext2, 'right', largecircle.width() - mediumcircle.width()/2 - 15, 120);
			
			var pointcircle3 = drawcircle(mediumcircle.width()/2, largecircle.height()/1.5, 14, pointcolor);		
			var tooltip3 = drawtooltip(mediumcircle.width()/1.9, largecircle.height()/1.5, ctext3, 'left', largecircle.width() - mediumcircle.width()/2 - 15, 120);
			
			var pointcircle4 = drawcircle(largecircle.width()/10, largecircle.height()/1.28, 14, pointcolor);		
			var tooltip4 = drawtooltip(largecircle.width()/9, largecircle.height()/1.28, ctext4, 'left', largecircle.width() - mediumcircle.width()/2 - 15, 120);
			
			var pointcircle5 = drawcircle(largecircle.width()/2 + 60, largecircle.height() + 5, 14, pointcolor);		
			var tooltip5 = drawtooltip(largecircle.width()/2 + 60, largecircle.height() - 1, ctext5, 'down', largecircle.width() - mediumcircle.width()/2 - 15, 120);
		}
		
		else {
		
			var pointcircle1 = drawcircle(mediumcircle.width() - 40, largecircle.height()/4, 14, pointcolor);
			var tooltip1 = drawtooltip(mediumcircle.width() - 40, largecircle.height()/4.3, ctext1, 'down', largecircle.width() - mediumcircle.width()/2 - 15, 70);
			
			var pointcircle2 = drawcircle(largecircle.width() - mediumcircle.width()/2.15, largecircle.height()/4 + 40, 14, pointcolor);		
			var tooltip2 = drawtooltip(largecircle.width() - mediumcircle.width()/2.02, largecircle.height()/4 + 40, ctext2, 'right', largecircle.width() - mediumcircle.width()/2 - 15, 70);
			
			var pointcircle3 = drawcircle(mediumcircle.width()/2, largecircle.height()/1.5, 14, pointcolor);		
			var tooltip3 = drawtooltip(mediumcircle.width()/1.9, largecircle.height()/1.5, ctext3, 'left', largecircle.width() - mediumcircle.width()/2 - 15, 70);
			
			var pointcircle4 = drawcircle(largecircle.width()/10, largecircle.height()/1.28, 14, pointcolor);		
			var tooltip4 = drawtooltip(largecircle.width()/8.8, largecircle.height()/1.28, ctext4, 'left', largecircle.width() - mediumcircle.width()/2 - 15, 70);
			
			var pointcircle5 = drawcircle(largecircle.width()/2 + 60, largecircle.height() + 5, 14, pointcolor);		
			var tooltip5 = drawtooltip(largecircle.width()/2 + 60, largecircle.height() - 1, ctext5, 'down', largecircle.width() - mediumcircle.width()/2 - 15, 70);
			
		}

		pointcircle1.on('mouseover touchstart', function() {
			if( pointhvcolor != '' ) {
				pointcircle1.fill(pointhvcolor);
			}            
			tooltip1.show();
         	tooltipLayer.draw();
			mdlayer.draw();
		});	  	
		
		pointcircle1.on('mouseout touchend', function() {
			pointcircle1.fill(pointcolor);			
			tooltip1.hide();
			tooltipLayer.draw();
			mdlayer.draw();
		});
		
		pointcircle2.on('mouseover touchstart', function() {
			if( pointhvcolor != '' ) {
				pointcircle2.fill(pointhvcolor);
			}			
			tooltip2.show();
         	tooltipLayer.draw();
			mdlayer.draw();
		});
		
		pointcircle2.on('mouseout touchend', function() {
			pointcircle2.fill(pointcolor);			
			tooltip2.hide();
			tooltipLayer.draw();
			mdlayer.draw();		 
		});	
		
		pointcircle3.on('mouseover touchstart', function() {
			if( pointhvcolor != '' ) {
				pointcircle3.fill(pointhvcolor);
			}			
			tooltip3.show();
         	tooltipLayer.draw();
			mdlayer.draw();
		});
		
		pointcircle3.on('mouseout touchend', function() {
			pointcircle3.fill(pointcolor);			
			tooltip3.hide();
			tooltipLayer.draw();
			mdlayer.draw();		 
		});
		
		pointcircle4.on('mouseover touchstart', function() {
			if( pointhvcolor != '' ) {
				pointcircle4.fill(pointhvcolor);
			}			
			tooltip4.show();
         	tooltipLayer.draw();
			lglayer.draw();
		});
		
		pointcircle4.on('mouseout touchend', function() {
			pointcircle4.fill(pointcolor);			
			tooltip4.hide();
			tooltipLayer.draw();
			lglayer.draw();		 
		});
		
		pointcircle5.on('mouseover touchstart', function() {
			if( pointhvcolor != '' ) {
				pointcircle5.fill(pointhvcolor);
			}			
			tooltip5.show();
         	tooltipLayer.draw();
			lglayer.draw();
		});
		
		pointcircle5.on('mouseout touchend', function() {
			pointcircle5.fill(pointcolor);			
			tooltip5.hide();
			tooltipLayer.draw();
			lglayer.draw();		 
		});

		smlayer.add(smallcircle);
		smlayer.add(text);
		mdlayer.add(mediumcircle);
		lglayer.add(largecircle);
		
		mdlayer.add(pointcircle1);
		mdlayer.add(pointcircle2);
		mdlayer.add(pointcircle3);
		lglayer.add(pointcircle4);
		lglayer.add(pointcircle5);
		
		tooltipLayer.add(tooltip1);
		tooltipLayer.add(tooltip2);
		tooltipLayer.add(tooltip3);
		tooltipLayer.add(tooltip4);
		tooltipLayer.add(tooltip5);
		
		stage.add(layer);
		stage.add(lglayer);
		stage.add(mdlayer);
		stage.add(smlayer);		
		stage.add(tooltipLayer);
				
		layer.draw();
		lglayer.draw();
		mdlayer.draw();
		smlayer.draw();

}

function drawcircle(ptxwidth, ptyheight, radius, pointcolor) {

	var pointcircle = new Kinetic.Circle({
		x: ptxwidth,
		y: ptyheight,
		radius: radius,
		fill: pointcolor,
		transformsEnabled: 'position'
	});
	
	return pointcircle;

}

function drawtooltip(ptxwidth, ptyheight, text, pointdirection, textwidth, textheight) {
	
	var tooltip = new Kinetic.Label({
		x: ptxwidth,
		y: ptyheight,		
		visible: false,
		listening: false
    });
      
	tooltip.add(new Kinetic.Tag({
		fill: 'white',
		pointerDirection: pointdirection,
		pointerWidth: 10,
		pointerHeight: 10,
		lineJoin: 'round',
		shadowColor: 'black',
		shadowBlur: 2,
		shadowOffset: {x:1, y:1},
		shadowOpacity: 0.4
	}));
  
	tooltip.add(new Kinetic.Text({
		text: text,
		fontFamily: 'Roboto',
		fontSize: 13,			
		padding: 12,
		width: textwidth,
		height: textheight,
		lineHeight: 1.7,
		fill: "#888A8C",
	}));

	return tooltip;

}