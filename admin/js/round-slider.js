// nav round slider

$(document.getElementsByClassName('round-slider')).roundSlider({
    sliderType: "min-range",
    value: 50,
    width: 45,
    radius: 80,
    handleSize: 0,
    // content :'100%',
    showTooltip: true,
    editableTooltip: false,
    svgMode: true,
    pathColor: "red",
    borderWidth: 0,
    startValue: 0,
    rangeColor: '#28B446',
    tooltipColor: 'black',
    startAngle: 270,
    readOnly: true,
    tooltipFormat: function(){
        return('<div style= "display: flex; justify-content-center; align-items-center; width:100%; height:100%;"> <p style=" font-size:20px; font-weight:700; margin:0; padding:0;">100%</p></div>')
    }
})

