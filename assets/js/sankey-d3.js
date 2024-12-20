document.addEventListener("DOMContentLoaded", function () {
    fetch("/assets/data/topic_transitions_sankey.json")
        .then(response => response.json())
        .then(data => {
            const width = 960, height = 500;

            const svg = d3.select("#sankey-plot").append("svg")
                .attr("width", width)
                .attr("height", height);

            const sankey = d3.sankey()
                .nodeWidth(15)
                .nodePadding(10)
                .extent([[1, 1], [width - 1, height - 6]]);

            // Create nodes and links from the data
            const { nodes, links } = sankey({
                nodes: Array.from(new Set(data.flatMap(d => [d.Topic_before, d.Topic_after])))
                    .map(name => ({ name })),
                links: data.map(d => ({
                    source: d.Topic_before,
                    target: d.Topic_after,
                    value: d.count,
                    rate: d.recovery_rate
                }))
            });

            // Color scale for recovery rates
            const colorScale = d3.scaleLinear()
                .domain([d3.min(data, d => d.recovery_rate), d3.max(data, d => d.recovery_rate)])
                .range(["#3b4cc0", "#b40426"]); // Cool-to-warm range

            // Add nodes
            svg.append("g")
                .selectAll("rect")
                .data(nodes)
                .join("rect")
                .attr("x", d => d.x0)
                .attr("y", d => d.y0)
                .attr("height", d => d.y1 - d.y0)
                .attr("width", sankey.nodeWidth())
                .attr("fill", "#004AAD")
                .append("title")
                .text(d => d.name);

            // Add links
            svg.append("g")
                .attr("fill", "none")
                .selectAll("path")
                .data(links)
                .join("path")
                .attr("d", d3.sankeyLinkHorizontal())
                .attr("stroke-width", d => Math.max(1, d.width))
                .attr("stroke", d => colorScale(d.rate))
                .attr("class", "link")
                .append("title")
                .text(d => `Transition: ${d.source.name} → ${d.target.name}\nRecovery Rate: ${d.rate}%\nCount: ${d.value}`);

            // Add node labels
            svg.append("g")
                .style("font", "10px sans-serif")
                .selectAll("text")
                .data(nodes)
                .join("text")
                .attr("x", d => (d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6))
                .attr("y", d => (d.y0 + d.y1) / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", d => (d.x0 < width / 2 ? "start" : "end"))
                .text(d => d.name);
        })
        .catch(error => console.error('Error loading the JSON data:', error));
});