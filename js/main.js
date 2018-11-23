
// **** Your JavaScript code goes here ****


d3.csv("data/colleges.csv", function(error, data) {

	if (error) throw error;
	var tmp = data
	console.log(data[0]);
	for (var i=0; i<data.length; ++i) {
		// data[i].GPA = Number(data[i].GPA);
		// data[i].SATM = Number(data[i].SATM);
		// data[i].SATV = Number(data[i].SATV);
		// data[i].ACT = Number(data[i].ACT);
		for (var key in data[i]) {
			if (data[i].hasOwnProperty(key)) {
				if (key != 'Name' && key != 'Control' && key != 'Region' && key != 'Locale') {
					data[i][key] = Number(data[i][key])
				}
			}
		}
	}
	console.log(data[0])
	console.log(data)
	data.sort(function(a, b) {return a['Admission Rate'] - b['Admission Rate']})
	console.log(data[0])
	console.log(data[1])
	// var regionMetrics = d3.nest()
	// 	.key(function(d) { return d.region; })
	// 	.rollup(function(v) { return d3.sum(v, function(d) { return d.sales; }) })
	// 	.entries(data);
	// console.log(regionMetrics);

	// var ordinalreg = []
	// var datareg = []
	// for (row in regionMetrics) {
	// 	console.log(regionMetrics[row]['key'])
	// 	ordinalreg.push(regionMetrics[row]['key'])
	// 	datareg.push(regionMetrics[row]['value'])
	// }
	// console.log("datareg")
	// console.log(datareg)
	
	// var svg = d3.select('svg')
	// 	.attr("class", "bar-chart");


	// svgwidth = 760;
	// svgheight = 600;
	// chart1width = svgwidth/2;

	// chartheight = 400;

	// marginheight = 100;


	// var barPadding = 20;
	// var barWidth = (chart1width / datareg.length);

	// var chart1max = Math.max(...datareg);
	// console.log(chart1max);
	// var scale = d3.scaleLinear()
	// 			.domain([0, chart1max])
	// 			.range([chartheight, 0]);
	// var y_axis = d3.axisLeft().scale(scale).tickFormat(d3.format(".2s")).ticks(5);
	// xmargin = 80
	// svg.append("text")
 //        .attr("x", xmargin + (chart1width / 2))             
 //        .attr("y", (marginheight  / 2))
 //        .attr("text-anchor", "middle")  
 //        .style("font-size", "16px") 
 //        .style("text-decoration", "underline")  
 //        .text("Coffee Sales by Region (USD)");
 //    svg.append("text")
 //        .attr("x", xmargin + (chart1width / 2))             
 //        .attr("y", (marginheight  + chartheight + 50))
 //        .attr("text-anchor", "middle")  
 //        .style("font-size", "14px") 
 //        .text("Region");
 //    svg.append("text")
 //        .attr("x", -(marginheight  + chartheight/2))   
 //        .attr("transform", "rotate(-90)")          
 //        .attr("y", 20)
 //        .attr("text-anchor", "middle")  
 //        .style("font-size", "14px") 
 //        .text("Coffee Sales (USD)");
	// svg.append("g").attr("transform", "translate("+xmargin+", "+ marginheight +")").call(y_axis);


	// var scale = d3.scaleBand()
 //        	.domain(ordinalreg)
 //        	.range([0, chart1width]);
 //    var x_axis = d3.axisBottom()
 //                   .scale(scale);

 //    var x_axis_y = 10 + chartheight + marginheight
 //    svg.append("g").attr("transform", "translate("+xmargin+", "+ x_axis_y +")").call(x_axis);

	// var barChart = svg.selectAll("rect.barchart1")
	// 	.data(datareg)
	// 	.enter()
	// 	.append("rect")
	// 	.attr("y", function(d) {
	// 		console.log(d)
	// 		return Math.round(marginheight+chartheight - chartheight*(d/chart1max));
	// 	})
	// 	.attr("class", "barchart1")
	// 	.attr("height", function(d) {
	// 		return Math.round(chartheight*(d/chart1max));
	// 	})
	// 	.attr("width", barWidth - barPadding)
	// 	.attr("transform", function (d, i) {

	// 		 var translate = [xmargin + 20 + barWidth * i]
	// 		 return "translate("+ translate +")";
	// 	});

	// //  New chart



	// var categoryMetrics = d3.nest()
	// 	.key(function(d) { return d.category; })
	// 	.rollup(function(v) { return d3.sum(v, function(d) { return d.sales; }) })
	// 	.entries(tmp);
	// console.log(categoryMetrics);

	// var ordinalreg = []
	// var datareg1 = []
	// for (row in categoryMetrics) {
	// 	console.log(categoryMetrics[row]['key'])
	// 	console.log(categoryMetrics[row]['value'])
	// 	ordinalreg.push(categoryMetrics[row]['key'])
	// 	datareg1.push(categoryMetrics[row]['value'])
	// }
	// console.log("Updated data")
	// console.log(datareg1)
	// var barPadding = 20;
	// var barWidth = (chart1width / datareg1.length);

	// var chart1max = Math.max(...datareg1);
	// console.log(chart1max);
	// var scale = d3.scaleLinear()
	// 			.domain([0, chart1max])
	// 			.range([chartheight, 0]);
	// var y_axis = d3.axisLeft().scale(scale).tickFormat(d3.format(".2s")).ticks(5);
	// xmargin = chart1width + 80 + 40 + 50
	// svg.append("text")
 //        .attr("x", xmargin + (chart1width / 2))             
 //        .attr("y", (marginheight  / 2))
 //        .attr("text-anchor", "middle")  
 //        .style("font-size", "16px") 
 //        .style("text-decoration", "underline")  
 //        .text("Coffee Sales by Category (USD)");
 //    svg.append("text")
 //        .attr("x", xmargin + (chart1width / 2))             
 //        .attr("y", (marginheight  + chartheight + 50))
 //        .attr("text-anchor", "middle")  
 //        .style("font-size", "14px") 
 //        .text("Category");
 //    svg.append("text")
 //        .attr("x", -(marginheight  + chartheight/2))   
 //        .attr("transform", "rotate(-90)")          
 //        .attr("y",  xmargin-50)
 //        .attr("text-anchor", "middle")  
 //        .style("font-size", "14px") 
 //        .text("Coffee Sales (USD)");
	// svg.append("g").attr("transform", "translate("+xmargin+", "+ marginheight +")").call(y_axis);


	// var scale = d3.scaleBand()
 //        	.domain(ordinalreg)
 //        	.range([0, chart1width]);
 //    var x_axis = d3.axisBottom()
 //                   .scale(scale);

 //    var x_axis_y = 10 + chartheight + marginheight
 //    svg.append("g").attr("transform", "translate("+xmargin+", "+ x_axis_y +")").call(x_axis);
 //    console.log("right before barchart")
	// var barChart2 = svg.selectAll("rect.barchart2")
	// 	.data(datareg1)
	// 	.enter()
	// 	.append("rect")
	// 	.attr("y", function(d) {
	// 		console.log(d)
	// 		console.log("enter")
	// 		return Math.round(marginheight+chartheight - chartheight*(d/chart1max));
	// 	})
	// 	.attr("class", "barchart2")
	// 	.attr("height", function(d) {
	// 		return Math.round(chartheight*(d/chart1max));
	// 	})
	// 	.attr("width", barWidth - barPadding)
	// 	.attr("transform", function (d, i) {
	// 		 var translate = [xmargin + 20 + barWidth * i, 0];
	// 		 return "translate("+ translate +", 0)";
	// 	});
	// console.log("After")


	


	//format data if required...
	//draw chart
})