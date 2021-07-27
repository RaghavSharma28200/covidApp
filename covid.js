
    var a = document.getElementById("id1")
    var b = document.getElementById("id2")
  b.addEventListener("keypress",key);
  function key(e){
      if(e.keyCode===13){
          show();
      }
  }
    function show() {
  console.log("button clicked")
    fetch(`https://api.covid19api.com/summary`).then((res) => {
        if (!res.ok) {
            throw Error(res.statusText)
        }
        return res.json()
    }).then((data) => {
        var output = document.getElementById("output");
        var input = document.getElementById("id2").value.trim();
        input = input.toLowerCase();
        for(i=0;i<data.Countries.length;i++){
            var z = data.Countries[i].Country;
            z=z.toLowerCase();
            if(z==input){
            output.innerHTML = `
            <div class="child1" ><h1>${data.Countries[i].Country}</h1></div>
           <div class="parent1">
            <div class="output1">New Confirmed<br>${data.Countries[i].NewConfirmed}</div>
            <div class="output1">New Death<br>${data.Countries[i].NewDeaths}</div>
            <div class="output1">New Recovered<br>${data.Countries[i].NewRecovered}</div></div>
          <div class="parent2"> 
           <div class="output2">Total Confirmed<br>${data.Countries[i].TotalConfirmed}</div>
            <div class="output2">Total Death<br>${data.Countries[i].TotalDeaths}</div>
            <div class="output2">Total Recovered<br>${data.Countries[i].TotalRecovered}</div></div>
              `
            }  
            b.value ="";          
        }
        
       
    }).catch((error)=>{console.log(error);
     window.alert("The country you write is not exist");  
    })
    }
    (function display(){
        fetch(`https://api.covid19api.com/summary`).then((res)=>{
          return res.json()
        }).then((data)=>{
            var global = document.getElementById("global");
            global.innerHTML = `
            <div class = "child2"><h1>Global Covid-19 Cases</h1></div>
           <div class="parent3"> 
            <div class="input1">New Confirmed<br>${data.Global.NewConfirmed}</div>
            <div class="input1">New Death<br>${data.Global.NewDeaths}</div>
            <div class="input1">New Recovered<br>${data.Global.NewRecovered}</div></div>
         <div class="parent4">  
             <div class="input2">Total Confirmed<br>${data.Global.TotalConfirmed}</div>
            <div class="input2">Total Death<br>${data.Global.TotalDeaths}</div>
            <div class="input2">Total Recovered<br>${data.Global.TotalRecovered}</div></div>
            `
        })
    })();
