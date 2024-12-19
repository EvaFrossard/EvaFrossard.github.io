function drawGraph2(svg) {
    // Configuration
    const strategies = [
        { name: "Apology", recoveryRate: 0, proportion: 0 },
        { name: "Clickbait", recoveryRate: 52.20, proportion: 30.73 },
        { name: "Break", recoveryRate: 0, proportion: 0 },
        { name: "Comeback", recoveryRate: 50, proportion: 0.07 },
        { name: "Featuring", recoveryRate: 18.92, proportion: 1.25 },
        { name: "Bad Buzz Addressed", recoveryRate: 0, proportion: 0 },
    ];
    const combinationRates = {
        "Apology, Clickbait": 100,
        "Apology, Break": 0,
        "Apology, Comeback": 0,
        "Apology, Featuring": 0,
        "Apology, Bad Buzz Addressed": 0,
        "Break, Clickbait": 50,
        "Clickbait, Comeback": 49.12,
        "Clickbait, Featuring": 48.60,
        "Bad Buzz Addressed, Clickbait": 53.80,
        "Break, Comeback": 0,
        "Break, Featuring": 0,
        "Bad Buzz Addressed, Break": 100,
        "Comeback, Featuring": 0,
        "Bad Buzz Addressed, Comeback": 0,
        "Bad Buzz Addressed, Featuring": 0,
        "Apology, Break, Clickbait": 0,
        "Apology, Clickbait, Comeback": 0,
        "Apology, Clickbait, Featuring": 33.33,
        "Apology, Bad Buzz Addressed, Clickbait": 36.36,
        "Apology, Break, Comeback": 0,
        "Apology, Break, Featuring": 0,
        "Apology, Bad Buzz Addressed, Break": 0,
        "Apology, Comeback, Featuring": 0,
        "Apology, Bad Buzz Addressed, Comeback": 0,
        "Apology, Bad Buzz Addressed, Featuring": 0,
        "Break, Clickbait, Comeback": 0,
        "Break, Clickbait, Featuring": 0,
        "Bad Buzz Addressed, Break, Clickbait": 36.67,
        "Clickbait, Comeback, Featuring": 44.44,
        "Bad Buzz Addressed, Clickbait, Comeback": 53.66,
        "Bad Buzz Addressed, Clickbait, Featuring": 54.49,
        "Break, Comeback, Featuring": 0,
        "Bad Buzz Addressed, Break, Comeback": 0,
        "Bad Buzz Addressed, Break, Featuring": 0,
        "Bad Buzz Addressed, Comeback, Featuring": 0,
        "Apology, Break, Clickbait, Comeback": 0,
        "Apology, Break, Clickbait, Featuring": 0,
        "Apology, Bad Buzz Addressed, Break, Clickbait": 46.67,
        "Apology, Clickbait, Comeback, Featuring": 0,
        "Apology, Bad Buzz Addressed, Clickbait, Comeback": 40.00,
        "Apology, Bad Buzz Addressed, Clickbait, Featuring": 54.55,
        "Apology, Break, Comeback, Featuring": 0,
        "Apology, Bad Buzz Addressed, Break, Comeback": 0,
        "Apology, Bad Buzz Addressed, Break, Featuring": 0,
        "Apology, Bad Buzz Addressed, Comeback, Featuring": 0,
        "Break, Clickbait, Comeback, Featuring": 0,
        "Bad Buzz Addressed, Break, Clickbait, Comeback": 58.33,
        "Bad Buzz Addressed, Break, Clickbait, Featuring": 49.23,
        "Bad Buzz Addressed, Clickbait, Comeback, Featuring": 48.28,
        "Bad Buzz Addressed, Break, Comeback, Featuring": 0,
        "Apology, Break, Clickbait, Comeback, Featuring": 0,
        "Apology, Bad Buzz Addressed, Break, Clickbait, Comeback": 43.75,
        "Apology, Bad Buzz Addressed, Break, Clickbait, Featuring": 29.41,
        "Apology, Bad Buzz Addressed, Clickbait, Comeback, Featuring": 50.00,
        "Apology, Bad Buzz Addressed, Break, Comeback, Featuring": 0,
        "Bad Buzz Addressed, Break, Clickbait, Comeback, Featuring": 33.85,
        "Apology, Bad Buzz Addressed, Break, Clickbait, Comeback, Featuring": 30.77
    };
    const combinationProportions = {
        "Apology, Clickbait": 0.068,
        "Apology, Break": 0,
        "Apology, Comeback": 0,
        "Apology, Featuring": 0,
        "Apology, Bad Buzz Addressed": 0,
        "Break, Clickbait": 0.135,
        "Clickbait, Comeback": 1.929,
        "Clickbait, Featuring": 12.047,
        "Bad Buzz Addressed, Clickbait": 5.347,
        "Break, Comeback": 0,
        "Break, Featuring": 0,
        "Bad Buzz Addressed, Break": 0.034,
        "Comeback, Featuring": 0,
        "Bad Buzz Addressed, Comeback": 0,
        "Bad Buzz Addressed, Featuring": 0,
        "Apology, Break, Clickbait": 0,
        "Apology, Clickbait, Comeback": 0,
        "Apology, Clickbait, Featuring": 0.102,
        "Apology, Bad Buzz Addressed, Clickbait": 0.372,
        "Apology, Break, Comeback": 0,
        "Apology, Break, Featuring": 0,
        "Apology, Bad Buzz Addressed, Break": 0,
        "Apology, Comeback, Featuring": 0,
        "Apology, Bad Buzz Addressed, Comeback": 0,
        "Apology, Bad Buzz Addressed, Featuring": 0,
        "Break, Clickbait, Comeback": 0,
        "Break, Clickbait, Featuring": 0.102,
        "Bad Buzz Addressed, Break, Clickbait": 2.030,
        "Clickbait, Comeback, Featuring": 2.437,
        "Bad Buzz Addressed, Clickbait, Comeback": 1.387,
        "Bad Buzz Addressed, Clickbait, Featuring": 5.279,
        "Break, Comeback, Featuring": 0,
        "Bad Buzz Addressed, Break, Comeback": 0,
        "Bad Buzz Addressed, Break, Featuring": 0,
        "Bad Buzz Addressed, Comeback, Featuring": 0,
        "Apology, Break, Clickbait, Comeback": 0,
        "Apology, Break, Clickbait, Featuring": 0.034,
        "Apology, Bad Buzz Addressed, Break, Clickbait": 0.508,
        "Apology, Clickbait, Comeback, Featuring": 0,
        "Apology, Bad Buzz Addressed, Clickbait, Comeback": 0.169,
        "Apology, Bad Buzz Addressed, Clickbait, Featuring": 0.372,
        "Apology, Break, Comeback, Featuring": 0,
        "Apology, Bad Buzz Addressed, Break, Comeback": 0,
        "Apology, Bad Buzz Addressed, Break, Featuring": 0,
        "Apology, Bad Buzz Addressed, Comeback, Featuring": 0,
        "Break, Clickbait, Comeback, Featuring": 0.068,
        "Bad Buzz Addressed, Break, Clickbait, Comeback": 1.218,
        "Bad Buzz Addressed, Break, Clickbait, Featuring": 2.200,
        "Bad Buzz Addressed, Clickbait, Comeback, Featuring": 3.926,
        "Bad Buzz Addressed, Break, Comeback, Featuring": 0,
        "Apology, Break, Clickbait, Comeback, Featuring": 0,
        "Apology, Bad Buzz Addressed, Break, Clickbait, Comeback": 0.541,
        "Apology, Bad Buzz Addressed, Break, Clickbait, Featuring": 1.151,
        "Apology, Bad Buzz Addressed, Clickbait, Comeback, Featuring": 0.271,
        "Apology, Bad Buzz Addressed, Break, Comeback, Featuring": 0,
        "Bad Buzz Addressed, Break, Clickbait, Comeback, Featuring": 2.200,
        "Apology, Bad Buzz Addressed, Break, Clickbait, Comeback, Featuring": 1.760
    };
    const radius = 130; // Reduced radius of the big circle
    const segmentRadius = 40; // Smaller radius of each strategy circle
    const centerTextDefault = "Click a Strategy";
    // SVG Setup
    //const svg = d3.select("#graph")
    //   .attr("viewBox", "-200 -200 400 400");
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
            if (combinationProportions[strategyNames] === 0 || calculateProportion() === 0) {
                centerText.html(`Nobody tried this...<tspan x="0" dy="1.5em">At your own risk!</tspan>`);
            } else {
                centerText.html(`Proportion: ${proportion.toFixed(2)}%<tspan x="0" dy="1.5em">Recovery Rate: ${recoveryRate}%</tspan>`);
            }
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