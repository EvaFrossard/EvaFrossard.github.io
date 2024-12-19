function drawGraph1(svg) {

    // Configuration
    const strategies = [
        { name: "Apology", recoveryRate: 37.34, proportion: 5.35 },
        { name: "Clickbait", recoveryRate: 49.31, proportion: 76.38 },
        { name: "Break", recoveryRate: 39.55, proportion: 11.98 },
        { name: "Comeback", recoveryRate: 44.70, proportion: 15.97 },
        { name: "Featuring", recoveryRate: 45.26, proportion: 33.20 },
        { name: "Bad Buzz Addressed", recoveryRate: 47.29, proportion: 28.76 },
    ];
    const combinationRates = {
        "Apology, Clickbait": 37.34,
        "Apology, Break": 33.90,
        "Apology, Comeback": 35.80,
        "Apology, Featuring": 33.94,
        "Apology, Bad Buzz Addressed": 36.84,
        "Break, Clickbait": 39.38,
        "Clickbait, Comeback": 44.68,
        "Clickbait, Featuring": 46.29,
        "Bad Buzz Addressed, Clickbait": 47.23,
        "Break, Comeback": 38.60,
        "Break, Featuring": 36.04,
        "Bad Buzz Addressed, Break": 40.12,
        "Comeback, Featuring": 41.27,
        "Bad Buzz Addressed, Comeback": 44.25,
        "Bad Buzz Addressed, Featuring": 45.56,
        "Apology, Break, Clickbait": 33.90,
        "Apology, Clickbait, Comeback": 35.80,
        "Apology, Clickbait, Featuring": 33.94,
        "Apology, Bad Buzz Addressed, Clickbait": 36.84,
        "Apology, Break, Comeback": 33.82,
        "Apology, Break, Featuring": 29.89,
        "Apology, Bad Buzz Addressed, Break": 34.19,
        "Apology, Comeback, Featuring": 33.33,
        "Apology, Bad Buzz Addressed, Comeback": 35.80,
        "Apology, Bad Buzz Addressed, Featuring": 34.29,
        "Break, Clickbait, Comeback": 38.60,
        "Break, Clickbait, Featuring": 36.04,
        "Bad Buzz Addressed, Break, Clickbait": 39.94,
        "Clickbait, Comeback, Featuring": 41.27,
        "Bad Buzz Addressed, Clickbait, Comeback": 44.25,
        "Bad Buzz Addressed, Clickbait, Featuring": 45.56,
        "Break, Comeback, Featuring": 31.93,
        "Bad Buzz Addressed, Break, Comeback": 39.05,
        "Bad Buzz Addressed, Break, Featuring": 37.04,
        "Bad Buzz Addressed, Comeback, Featuring": 40.66,
        "Apology, Break, Clickbait, Comeback": 33.82,
        "Apology, Break, Clickbait, Featuring": 29.89,
        "Apology, Bad Buzz Addressed, Break, Clickbait": 34.19,
        "Apology, Clickbait, Comeback, Featuring": 33.33,
        "Apology, Bad Buzz Addressed, Clickbait, Comeback": 35.80,
        "Apology, Bad Buzz Addressed, Clickbait, Featuring": 34.29,
        "Apology, Break, Comeback, Featuring": 30.77,
        "Apology, Bad Buzz Addressed, Break, Comeback": 33.82,
        "Apology, Bad Buzz Addressed, Break, Featuring": 30.23,
        "Apology, Bad Buzz Addressed, Comeback, Featuring": 33.33,
        "Break, Clickbait, Comeback, Featuring": 31.93,
        "Bad Buzz Addressed, Break, Clickbait, Comeback": 39.05,
        "Bad Buzz Addressed, Break, Clickbait, Featuring": 37.04,
        "Bad Buzz Addressed, Clickbait, Comeback, Featuring": 40.66,
        "Bad Buzz Addressed, Break, Comeback, Featuring": 32.48,
        "Apology, Break, Clickbait, Comeback, Featuring": 30.77,
        "Apology, Bad Buzz Addressed, Break, Clickbait, Comeback": 33.82,
        "Apology, Bad Buzz Addressed, Break, Clickbait, Featuring": 30.23,
        "Apology, Bad Buzz Addressed, Clickbait, Comeback, Featuring": 33.33,
        "Apology, Bad Buzz Addressed, Break, Comeback, Featuring": 30.77,
        "Bad Buzz Addressed, Break, Clickbait, Comeback, Featuring": 32.48,
        "Apology, Bad Buzz Addressed, Break, Clickbait, Comeback, Featuring": 30.77
    };
    const combinationProportions = {
        "Apology, Clickbait": 5.35,
        "Apology, Break": 3.99,
        "Apology, Comeback": 2.74,
        "Apology, Featuring": 3.69,
        "Apology, Bad Buzz Addressed": 5.14,
        "Break, Clickbait": 11.95,
        "Clickbait, Comeback": 15.91,
        "Clickbait, Featuring": 31.95,
        "Bad Buzz Addressed, Clickbait": 28.73,
        "Break, Comeback": 5.79,
        "Break, Featuring": 7.51,
        "Bad Buzz Addressed, Break": 11.64,
        "Comeback, Featuring": 10.66,
        "Bad Buzz Addressed, Comeback": 11.47,
        "Bad Buzz Addressed, Featuring": 17.16,
        "Apology, Break, Clickbait": 3.99,
        "Apology, Clickbait, Comeback": 2.74,
        "Apology, Clickbait, Featuring": 3.69,
        "Apology, Bad Buzz Addressed, Clickbait": 5.14,
        "Apology, Break, Comeback": 2.30,
        "Apology, Break, Featuring": 2.94,
        "Apology, Bad Buzz Addressed, Break": 3.96,
        "Apology, Comeback, Featuring": 2.03,
        "Apology, Bad Buzz Addressed, Comeback": 2.74,
        "Apology, Bad Buzz Addressed, Featuring": 3.55,
        "Break, Clickbait, Comeback": 5.79,
        "Break, Clickbait, Featuring": 7.51,
        "Bad Buzz Addressed, Break, Clickbait": 11.61,
        "Clickbait, Comeback, Featuring": 10.66,
        "Bad Buzz Addressed, Clickbait, Comeback": 11.47,
        "Bad Buzz Addressed, Clickbait, Featuring": 17.16,
        "Break, Comeback, Featuring": 4.03,
        "Bad Buzz Addressed, Break, Comeback": 5.72,
        "Bad Buzz Addressed, Break, Featuring": 7.31,
        "Bad Buzz Addressed, Comeback, Featuring": 8.16,
        "Apology, Break, Clickbait, Comeback": 2.30,
        "Apology, Break, Clickbait, Featuring": 2.94,
        "Apology, Bad Buzz Addressed, Break, Clickbait": 3.96,
        "Apology, Clickbait, Comeback, Featuring": 2.03,
        "Apology, Bad Buzz Addressed, Clickbait, Comeback": 2.74,
        "Apology, Bad Buzz Addressed, Clickbait, Featuring": 3.55,
        "Apology, Break, Comeback, Featuring": 1.76,
        "Apology, Bad Buzz Addressed, Break, Comeback": 2.30,
        "Apology, Bad Buzz Addressed, Break, Featuring": 2.91,
        "Apology, Bad Buzz Addressed, Comeback, Featuring": 2.03,
        "Break, Clickbait, Comeback, Featuring": 4.03,
        "Bad Buzz Addressed, Break, Clickbait, Comeback": 5.72,
        "Bad Buzz Addressed, Break, Clickbait, Featuring": 7.31,
        "Bad Buzz Addressed, Clickbait, Comeback, Featuring": 8.16,
        "Bad Buzz Addressed, Break, Comeback, Featuring": 3.96,
        "Apology, Break, Clickbait, Comeback, Featuring": 1.76,
        "Apology, Bad Buzz Addressed, Break, Clickbait, Comeback": 2.30,
        "Apology, Bad Buzz Addressed, Break, Clickbait, Featuring": 2.91,
        "Apology, Bad Buzz Addressed, Clickbait, Comeback, Featuring": 2.03,
        "Apology, Bad Buzz Addressed, Break, Comeback, Featuring": 1.76,
        "Bad Buzz Addressed, Break, Clickbait, Comeback, Featuring": 3.96,
        "Apology, Bad Buzz Addressed, Break, Clickbait, Comeback, Featuring": 1.76
    };
    const radius = 130; // Reduced radius of the big circle
    const segmentRadius = 40; // Smaller radius of each strategy circle
    const centerTextDefault = "Click a Strategy";
    // SVG Setup
    //const svg = d3.select("#graph")
    //   
    // Calculate positions for strategy circles
    const angleStep = (2 * Math.PI) / strategies.length;
    const positions = strategies.map((_, i) => ({
        x: radius * Math.cos(i * angleStep),
        y: radius * Math.sin(i * angleStep),
    }));
    // Selected strategies
    let selectedStrategies = [];
    // Draw strategy circles
    svg.selectAll(".strategy")
        .data(strategies)
        .enter()
        .append("circle")
        .attr("class", "strategy")
        .attr("r", segmentRadius)
        .attr("cx", (_, i) => positions[i].x)
        .attr("cy", (_, i) => positions[i].y)
        .attr("fill", "#004AAD") // Not selected color
        .on("click", function (event, d) {
            const index = selectedStrategies.indexOf(d);
            if (index === -1) {
                // Add strategy to selection
                selectedStrategies.push(d);
                d3.select(this).attr("fill", "#b51a00"); // Selected color
            } else {
                // Remove strategy from selection
                selectedStrategies.splice(index, 1);
                d3.select(this).attr("fill", "#004AAD"); // Not selected color
            }
            // Update center text and links
            updateCenterText();
            drawLinks();
        });
    svg.selectAll(".strategy-label")
        .data(strategies)
        .enter()
        .append("text")
        .attr("class", "strategy-label")
        .attr("x", (_, i) => positions[i].x)
        .attr("y", (_, i) => positions[i].y)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "10px")
        .style("fill", "white")
        .each(function (d, i) {
            const label = d.name === "Bad Buzz Addressed" ? ["Bad Buzz", "Addressed"] : [d.name];
            label.forEach((line, j) => {
                d3.select(this)
                    .append("tspan")
                    .attr("x", positions[i].x)
                    .attr("y", positions[i].y + j * 12) // Adjust vertical spacing for multi-line text
                    .text(line);
            });
        });
    // Add center text background (semi-transparent backdrop)
    const centerTextGroup = svg.append("g").attr("class", "center-text-group");
    const backgroundRect = centerTextGroup.append("rect")
        .attr("x", -61)
        .attr("y", -15)
        .attr("width", 120)
        .attr("height", 30)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "rgba(0, 0, 0, 0)")
        .attr("stroke", "rgba(0, 0, 0, 0)")
        .attr("stroke-width", 2)
        .style("visibility", "hidden");  // Initially hide the rectangle
    const centerText = centerTextGroup.append("text")
        .attr("class", "center-text")
        .attr("x", 0)
        .attr("y", 0)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("fill", "black")
        .text(centerTextDefault);
    function updateCenterText() {
        const centerX = 0;  // Keep the center of the SVG as the default X position
        const centerY = 0;  // Keep the center of the SVG as the default Y position
        if (selectedStrategies.length === 0) {
            centerText.text(centerTextDefault);
            backgroundRect.style("visibility", "hidden");  // Hide rectangle
            centerTextGroup.attr("transform", "translate(0, 0)");  // Reset position
        } else {
            const strategyNames = selectedStrategies.map(s => s.name).sort().join(", ");
            const recoveryRate = combinationRates[strategyNames] || calculateRecoveryRate();
            const proportion = combinationProportions[strategyNames] || calculateProportion();
            // Update the center text with two lines
            centerText.html(`Proportion: ${proportion.toFixed(2)}%<tspan x="0" dy="1.5em">Recovery Rate: ${recoveryRate}%</tspan>`);
            const verticalOffset = selectedStrategies.length > 0 ? -7 : 0;  // Adjust the vertical offset when strategies are selected
            centerTextGroup.attr("transform", "translate(" + centerX + ", " + (centerY + verticalOffset) + ")");
            backgroundRect.style("visibility", "visible");  // Show rectangle
        }
    }
    // Function to calculate the sum of selected strategies (fallback)
    function calculateRecoveryRate() {
        return selectedStrategies.reduce((sum, strategy) => sum + strategy.recoveryRate, 0);
    }
    // Function to calculate the sum of selected strategies (fallback)
    function calculateProportion() {
        return selectedStrategies.reduce((sum, strategy) => sum + strategy.proportion, 0);
    }
    // Function to calculate edge points for links
    function getEdgePoint(x1, y1, x2, y2, r) {
        const angle = Math.atan2(y2 - y1, x2 - x1);
        return { x: x1 + r * Math.cos(angle), y: y1 + r * Math.sin(angle) };
    }
    // Function to draw links between selected strategies
    function drawLinks() {
        svg.selectAll(".link").remove();
        if (selectedStrategies.length > 1) {
            const linkGroup = svg.append("g").attr("class", "link-group");
            for (let i = 0; i < selectedStrategies.length; i++) {
                for (let j = i + 1; j < selectedStrategies.length; j++) {
                    const pos1 = positions[strategies.indexOf(selectedStrategies[i])];
                    const pos2 = positions[strategies.indexOf(selectedStrategies[j])];
                    const edge1 = getEdgePoint(pos1.x, pos1.y, pos2.x, pos2.y, segmentRadius);
                    const edge2 = getEdgePoint(pos2.x, pos2.y, pos1.x, pos1.y, segmentRadius);
                    linkGroup.append("line")
                        .attr("class", "link")
                        .attr("x1", edge1.x)
                        .attr("y1", edge1.y)
                        .attr("x2", edge2.x)
                        .attr("y2", edge2.y)
                        .attr("stroke", "rgba(97, 23, 125, 0.4)")
                        .attr("stroke-width", 2);
                }
            }
        }
        // Move center text group to the front
        centerTextGroup.raise();
    }
}
