 const app = new Vue({
    el: '#app', 
    data:{ 
      player: new Play(),
      question: '',
      input: '',
      select: '',
      state: false
    },
    methods:{ 
      doRoll: function(g,i){
      let ans = this.player.Roll(g);
      let elemn = '#'+i
      $(elemn).html(`<span class="purple-text">computer:</span>${ans.computer}&#32 <span class="purple-text">user:</span>${ans.user}&#32 &#32 &#32 <span class="purple-text">won:</span>${ans.won}`);
     },
     selected: function () {
         this.doRoll($('#selectInput').val(),'data-t3');
       },
       compute: function (i) {
             let j = '#'+i
            $(j).html(this.player.Compute()); 
       },
       Checkit: function(){
         console.log('it works');
           let user = this.player.RPS_switch($('#userG').val())
           let comp = this.player.RPS_switch($('#compG').val())
           let ans = this.player.Won(user,comp);
           this.state = ans; 
           $('#userG').val('')
           $('#compG').val('')
           $('#data-t5').text(ans)
       }
    },
    watch:{
      input: function () {
        console.log('you are typing') 
      }
    }
   })