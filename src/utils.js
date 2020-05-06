export const genColor = (percentage) =>{ 
    
  if(percentage <= 0 ){
    return 'green'
  }else if(percentage > 0 && percentage <= 10){
    return '#FFE6E6'
  }else if(percentage > 10 && percentage <= 20){
    return '#FCCDCD'
  }else if(percentage > 20 && percentage <= 30){
    return '#FDBBBB'
  }else if(percentage > 30 && percentage <= 40){
    return '#FFAAAA'
  }else if(percentage > 40 && percentage <= 50){
    return '#FD9797'
  }else if(percentage > 50 && percentage <= 60){
    return '#FA7878'
  }else if(percentage > 60 && percentage <= 80){ //Remember to refactor with additional color for values 60 - 70
    return '#FC5959'
  }else if(percentage > 80 && percentage <= 90){
    return '#F72f2f'
  }else if(percentage > 90 && percentage <= 100){
    return '#E61212'
  }
  else{
    return '#cccccc'
  }
}

export const getDistrictInfo = (districtId, mapData) =>{ 

  const targetDistrictInfo = mapData.filter(match => match.districtId === districtId);

  return( //HTML for pop-up
    `<html>
      <style>
        .tooltipInfoWrapper{
          background-color: white;
          color: black;
          padding: 5px;
          border-radius: 5px 5px 5px 5px;
        }
        h2{
          text-align: center;
        }

      </style>
      <div class='tooltipInfoWrapper'>
      <h2><u>District Info</u></h2>
      <p><b>District Name: </b>${targetDistrictInfo[0].districtId}</p> 
      <p><b>Rate: </b>${targetDistrictInfo[0].rate}%</p>
      </div>
    </html>`
    );

}
