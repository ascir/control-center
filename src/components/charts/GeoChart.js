import React, { useRef, useEffect, useState } from 'react'
import {
  select,
  geoPath,
  geoMercator,
  schemeYlGnBu,
  format,
  scaleThreshold
} from 'd3'
import useResizeObserver from './useResizeObserver'
import { legendColor } from 'd3-svg-legend'

function GeoChart ({ data, count }) {
  const svgRef = useRef()
  const wrapperRef = useRef()
  const dimensions = useResizeObserver(wrapperRef)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [countByIdState, setCountByIdState] = useState({})
  console.log(data)
  var countById = {}
  Promise.resolve(count).then(value => {
    console.log('[resolved]', value)
    Array.prototype.forEach.call(value, function (d) {
      countById[d.id] = +d.count
      console.log('[countbyidd.id]', countById[d.id])
    })
    // property.forEach(function(d) {countById[d.id]=+d.count;});
    Array.prototype.forEach.call(data.features, function (d) {
      d.count = countById[d.id]
      console.log('[d]', d)
      console.log('[countbyidsecond]', countById)
      console.log('[d.idsecond]', d.id)
    })
    // this.setState({countByIdState: countById})
    // setCountByIdState({countByIdState: countById});
    // console.log("[countbyIdState]", countByIdState)
    // this.forceUpdate()
  })
  useEffect(() => {
    const svg = select(svgRef.current)
    // const minProp = min(data.features, feature => feature.properties[property]);
    // const maxProp = max(data.features, feature => feature.properties[property]);
    const color = scaleThreshold()
      .domain([10, 100, 1000, 5000, 100000, 500000])
      .range(schemeYlGnBu[7])
    // scaleLinear()
    //   .domain([minProp, maxProp])
    //   .range(["yellow", "blue"]);
    // use resized dimensions
    // but fall back to getBoundingClientRect, if no dimensions yet.
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect()
    // projects geo-coordinates on a 2D plane
    const projection = geoMercator()
      .fitSize([width, height], selectedCountry || data)
      .precision(100)
    // takes geojson data,
    // transforms that into the d attribute of a path element
    const pathGenerator = geoPath().projection(projection)
    // render each country
    svg
      .selectAll('path')
      .data(data.features)
      .join('path')
      .on('click', feature => {
        setSelectedCountry(selectedCountry === feature ? null : feature)
      })
      .attr('class', 'country')
      .transition()
      // .append('title').text('Hello')
      .style('fill', function (d) {
        console.log('[color]', countById)
        return countById ? color(countById[d.id]) : ``
      })
      // .style("fill", function(d) {return color(this.countByIdState? this.countByIdState[d.id]:'');})
      .attr('d', feature => pathGenerator(feature))

 
    // render text
    svg
      .selectAll('.label')
      .data([selectedCountry])
      .join('text')
      .attr('class', 'label')
      .text(
        feature =>
          feature &&
          feature.properties.name + ': ' + feature.count.toLocaleString()
        // feature.properties[count].toLocaleString()
      )
      .attr('x', 10)
      .attr('y', 25)
  

    

        var labels = [0, 10, 100, 1000, 5000, 100000, 500000]

    svg
      .append('g')
      .attr('class', 'legendLinear')
      // .append("text")
      // .attr("class", "label")
      .attr('transform', 'translate(760,280)')
      .append("text")
      .attr("class", "label")

    var legendLinear = legendColor()
      .orient('horizontal')
      .scale(color)
      .labels(function(d){
        return labels[d.i];
      })
      .labelFormat(format(","))
      .labelWrap(30)
      .shapeWidth(40)
      .labelAlign("start")
      // .shapePadding(10);

    svg.select('.legendLinear').call(legendLinear)

  })
  return (
    <div ref={wrapperRef} style={{ marginBottom: '2rem' }}>
      <svg ref={svgRef}></svg>
    </div>
  )
}
export default GeoChart;
