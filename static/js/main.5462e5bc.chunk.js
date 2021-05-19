(this["webpackJsonplearning-materials-frontend"]=this["webpackJsonplearning-materials-frontend"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(8),i=n.n(r),a=(n(13),n(3)),o=n(4),d=n(6),l=n(5);n(14);function u(e){var t=[];return e.forEach((function(e){return e.cards.forEach((function(e){return t.push(e)}))})),t}var j=function(e){switch(e.activity){case"Practice":case"Multiple Choice":case"Speed Game":return!0;case"Bingo":return function(e){return!(e.cards.length<25)||(alert("You need at least 25 vocab cards to play Bingo. Please select another set(s)."),!1)}(e);default:return!0}};var h=n(0),p=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Placeholder"})})},b=function(e){var t=e.displayOptions;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Welcome!"}),Object(h.jsx)("h2",{children:"Practice Spanish / English"}),Object(h.jsx)("button",{onClick:t,children:"Get Started"})]})},x=n(2),O=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).displayLevels=function(){return Object(h.jsxs)("select",{onChange:function(t){return e.changeLevel(t)},children:[Object(h.jsx)("option",{value:"0",children:"-- select level --"},"level-0"),[1].map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},"level-".concat(t+1))}))]})},e.displayActivities=function(){return Object(h.jsxs)("select",{onChange:function(t){return e.changeActivity(t)},children:[Object(h.jsx)("option",{value:"invalid",children:"-- select activity --"},"activity-0"),["Practice","Multiple Choice","Speed Game","Bingo"].map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},"activity-".concat(t+1))}))]})},e.displaySides=function(){return Object(h.jsxs)("select",{onChange:function(t){return e.changeDisplaySide(t)},children:[Object(h.jsx)("option",{value:"invalid",children:"-- select display side --"},"side-0"),["english","spanish"].map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},"".concat(e))}))]})},e.changeLevel=function(t){var n=parseInt(t.target.value);e.setState({level:n})},e.changeActivity=function(t){var n=t.target.value;e.setState({activity:n})},e.changeDisplaySide=function(t){var n=t.target.value;e.setState({displaySide:n})},e.addDeck=function(t){var n=parseInt(t.target.value),c=Object(x.a)(e.state.decks);t.target.checked?c.push(e.props.decks.find((function(e){return e.id===n}))):c=c.filter((function(e){return e.id!==n})),e.setState({decks:c})},e.checkState=function(){console.log(e.state)},e.state={level:0,decks:[],activity:"invalid",displaySide:"invalid"},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Select an exercise."}),Object(h.jsxs)("h2",{children:[Object(h.jsx)("label",{children:"Level: "}),this.displayLevels()]}),Object(h.jsxs)("h2",{children:[Object(h.jsx)("label",{children:"Activity: "}),this.displayActivities()]}),Object(h.jsxs)("h2",{children:[Object(h.jsx)("label",{children:"Display side: "}),this.displaySides()]}),Object(h.jsx)("h2",{children:Object(h.jsxs)("label",{children:["Deck","(s):"," "]})}),this.props.decks.filter((function(t){return t.level===e.state.level})).map((function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"checkbox",value:t.id,onChange:e.addDeck}),Object(h.jsxs)("label",{children:[t.name," - ",t.cards.length]})]},t.name)})),Object(h.jsx)("h3",{children:0===this.state.decks.length||0===this.state.level||"invalid"===this.state.activity||"invalid"===this.state.displaySide?"All fields must be valid to continue":Object(h.jsx)("button",{onClick:function(){return e.props.setExercise(e.state)},children:"Set Exercise"})})]})}}]),n}(c.Component),v=function(e){return e.sort((function(){return Math.random()-.5}))},f=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).flipCard=function(){"english"===e.state.side?e.setState({side:"spanish"}):e.setState({side:"english"})},e.state={side:"english"},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({side:this.props.front})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Card component: "}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:this.flipCard,children:"Flip Card"})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"practice-card",children:Object(h.jsx)("div",{className:"practice-card-text",children:this.props.card[this.state.side]})}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:this.props.nextCard,children:"Next Card"}),Object(h.jsx)("button",{onClick:this.props.removeCard,children:"Remove Card"})]})]})}}]),n}(c.Component),m=function(e){var t=e.nextRound,n=e.resetDeck;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:t,children:"Next Round"})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:n,children:"Reset Practice"})})]})},g=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).nextCard=function(){var t=e.state.currentCardIndex+1;t<e.state.cards.length?e.setState({currentCardIndex:t}):e.setState({currentCardIndex:0,nextRoundButton:!0})},e.removeCard=function(){var t=Object.assign({},e.state.cards[e.state.currentCardIndex]),n=Object(x.a)(e.state.completedCards);n.push(t);var c=Object(x.a)(e.state.cards).filter((function(t,n){return n!==e.state.currentCardIndex})),s=e.state.cards.length-1===e.state.currentCardIndex,r=s?0:e.state.currentCardIndex;e.setState({cards:c,completedCards:n,currentCardIndex:r,nextRoundButton:s})},e.nextRound=function(){var t=Object(x.a)(e.state.cards);e.setState({cards:v(t),currentCardIndex:0,nextRoundButton:!1})},e.resetDeck=function(){var t=v(Object(x.a)(e.props.cards));e.setState({cards:t,completedCards:[],currentCardIndex:0,nextRoundButton:!1})},e.checkState=function(){console.log(e.state)},e.state={cards:[{english:"english",spanish:"spanish"}],completedCards:[],currentCardIndex:0,nextRoundButton:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.resetDeck()}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Practice Exercise:"}),Object(h.jsxs)("div",{children:["( ",this.props.deckNames.join(", ")," )"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsxs)("h3",{children:["Cards remaining: ",this.state.cards.length]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("h3",{children:["Cards completed: ",this.state.completedCards.length]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("h3",{children:["Current Card: ",this.state.currentCardIndex+1," / ",this.state.cards.length]})}),Object(h.jsx)("div",{children:this.state.nextRoundButton?Object(h.jsx)(m,{nextRound:this.nextRound,resetDeck:this.resetDeck}):Object(h.jsx)(f,{front:this.props.termDisplay,card:this.state.cards[this.state.currentCardIndex],removeCard:this.removeCard,nextCard:this.nextCard})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:this.props.exitExercise,children:"Exit Exercise"})]})]})}}]),n}(c.Component),y=function(e){var t=e.index,n=e.option,c=e.color,s=e.selectCard;return Object(h.jsx)("div",{className:"practice-card",style:{backgroundColor:c},onClick:function(){return s(n)},children:Object(h.jsx)("div",{className:"practice-card-text",children:n})},"option-".concat(t))},C=function(e){var t=e.deckName,n=e.result,c=e.exitView;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:["Multiple Choice Results - ",t]}),Object(h.jsxs)("h3",{children:["Score: ",n.correctAnswers," / ",n.questions]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:c,children:"Back to Options"})]})},k=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).setAnswer=function(t){e.setState({answer:t.target.value})},e.submitAnswer=function(){var t=e.state.answer===e.state.currentCard[e.props.cardDisplay]?1:0;if(""===e.state.answer)alert("Invalid response. Please select one of the options!");else if(e.state.round+1<e.state.cards.length)e.setNextRound(t);else{var n=e.state.correctAnswers+t;e.endMultipleChoiceRound(n)}},e.shuffleMultipleChoice=function(t){var n=Object(x.a)(e.state.cards).filter((function(e,n){return n!==t})),c=v(n);return[e.state.cards[t]].concat(Object(x.a)(c.slice(0,3)))},e.setNextRound=function(t){var n=e.state.round+1,c=e.state.correctAnswers+t,s=e.shuffleMultipleChoice(n),r=v(Object(x.a)(s)).map((function(t){return t[e.props.cardDisplay]}));e.setState({round:n,correctAnswers:c,currentCard:s[0],answerOptions:r,answer:""})},e.endMultipleChoiceRound=function(t){var n={questions:e.props.cards.length,correctAnswers:t},c=Object(h.jsx)(C,{deckName:e.props.deckName,result:n,exitView:e.props.exitExercise});e.props.changeView(c)},e.selectCard=function(t){e.setState({answer:t})},e.checkState=function(){console.log(e.state)},e.state={cards:[],round:0,correctAnswers:0,currentCard:{english:"English Side",spanish:"Spanish Side"},answerOptions:["","","",""],answer:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=v(this.props.cards),n=t[0],c=v(t.slice(0,4)).map((function(t){return t[e.props.cardDisplay]}));this.setState({cards:t,currentCard:n,answerOptions:c})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Multiple Choice Exercise:"}),Object(h.jsxs)("div",{children:["( ",this.props.deckNames.join(", ")," )"]}),Object(h.jsxs)("h3",{children:["# of Questions: ",this.props.cards.length]}),Object(h.jsxs)("h3",{children:["Score: ",this.state.correctAnswers," / ",this.state.round]}),Object(h.jsxs)("h1",{children:["- ",this.state.currentCard[this.props.termDisplay]," -"]}),Object(h.jsx)("ul",{children:this.state.answerOptions.map((function(t,n){return Object(h.jsx)(y,{index:n,option:t,answer:e.state.answer,color:t===e.state.answer?"#ffc40c":"cadetblue",selectCard:e.selectCard})}))}),Object(h.jsx)("button",{onClick:this.submitAnswer,children:"Submit Answer"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:this.props.exitExercise,children:"Exit Exercise"})]})}}]),n}(c.Component),w=function(){return new Promise((function(e){return setTimeout(e,1e3)}))},S=function(e){var t=e.index,n=e.term,c=e.selectCard;return Object(h.jsx)("td",{className:"speed-card",onClick:function(){return c(n)},children:Object(h.jsx)("div",{className:"speed-card-text",children:n})},"speed-card-".concat(t))},D=function(e){var t=e.cardDisplay,n=e.cards,c=e.selectCard;return Object(h.jsx)("table",{children:Object(h.jsx)("tbody",{children:Object(h.jsx)("tr",{children:n.map((function(e,n){return Object(h.jsx)(S,{index:n,term:e[t],selectCard:c})}))})})})},E=function(e){var t=e.deckNames,n=e.score,c=e.exitView;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Speed Game Results:"}),Object(h.jsxs)("h3",{children:["Deck(s): ",t.join(", ")]}),Object(h.jsxs)("h3",{children:["Score: ",n]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:c,children:"Back to Options"})]})},N=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).initializeGame=function(){e.setRound(0,0),e.timerMinusOne()},e.timerMinusOne=function(){var t=e.state.timer-1;if(t>0&&e.state.inPlay)e.setState({timer:t}),w().then(e.timerMinusOne);else{if(!(e.state.round+1<e.props.cards.length&&e.state.inPlay))return e.gameOver();console.log("round ".concat(e.state.round+1," === ").concat(e.props.cards.length));var n=e.state.score-10,c=e.state.round+1;e.setRound(n,c),w().then(e.timerMinusOne)}},e.selectCard=function(t){var n=e.state.score;t===e.props.cards[e.state.round][e.props.cardDisplay]?n+=e.state.timer:n-=e.state.timer;var c=e.state.round+1;e.setRound(n,c)},e.setRound=function(t,n){if(n>=e.props.cards.length)console.log("End Game"),e.endGame(t);else{var c=Object(x.a)(e.props.cards.filter((function(e,t){return t!==n}))),s=v([e.props.cards[n]].concat(Object(x.a)(v(c).slice(0,3))));e.setState({round:n,score:t,timer:11,currentSet:s})}},e.endGame=function(t){e.setState({round:0,score:t,timer:11,currentSet:[{english:"",spanish:""},{english:"",spanish:""},{english:"",spanish:""},{english:"",spanish:""}],inPlay:!1})},e.gameOver=function(){console.log("Game Over"),e.props.changeView(Object(h.jsx)(E,{deckNames:e.props.deckNames,score:e.state.score,exitView:e.props.exitExercise}))},e.checkState=function(){console.log(e.state)},e.state={round:0,score:0,timer:11,currentSet:[{english:"English Side",spanish:"Spanish Side"}],inPlay:!0},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.initializeGame()}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Speed Game Exercise:"}),Object(h.jsxs)("div",{children:["( ",this.props.deckNames.join(", ")," )"]}),Object(h.jsxs)("h3",{children:["Round: ",this.state.round+1," / ",this.props.cards.length]}),Object(h.jsxs)("h3",{children:["Score: ",this.state.score]}),Object(h.jsxs)("h3",{children:["Timer: ",this.state.timer]}),Object(h.jsxs)("h1",{children:["- ",this.props.cards[this.state.round][this.props.termDisplay]," -"]}),Object(h.jsx)(D,{cardDisplay:this.props.cardDisplay,cards:this.state.currentSet,selectCard:this.selectCard}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:this.props.exitExercise,children:"Exit Exercise"})]})}}]),n}(c.Component),M=function(e){var t=!1;return e.find((function(e){return e.every((function(e){return"green"===e}))}))&&(t=!0),t},B=function(e){var t=[[],[],[],[],[]];return e.forEach((function(e){return e.forEach((function(e,n){return t[n].push(e)}))})),M(t)},A=function(e){return[e[0][0],e[1][1],e[2][2],e[3][3],e[4][4]].every((function(e){return"green"===e}))},R=function(e){return[e[0][4],e[1][3],e[2][2],e[3][1],e[4][0]].every((function(e){return"green"===e}))},I=function(e){var t=e.matrix;return Object(h.jsx)("div",{children:Object(h.jsx)("table",{id:"bingo-board",children:Object(h.jsxs)("tbody",{children:[Object(h.jsx)("tr",{children:t[0].map((function(e){return e}))},"bingo-row-0"),Object(h.jsx)("tr",{children:t[1].map((function(e){return e}))},"bingo-row-1"),Object(h.jsx)("tr",{children:t[2].map((function(e){return e}))},"bingo-row-2"),Object(h.jsx)("tr",{children:t[3].map((function(e){return e}))},"bingo-row-3"),Object(h.jsx)("tr",{children:t[4].map((function(e){return e}))},"bingo-row-4")]})})})},P=function(e){var t=e.row,n=e.column,c=e.card,s=e.side,r=e.color,i=e.selectCard;return Object(h.jsx)("td",{className:"bingo-cell",style:{backgroundColor:r},onClick:function(){return i(c,t,n)},children:Object(h.jsx)("div",{className:"bingo-cell-text",children:c[s]})},"bingo-cell-".concat(t,"-").concat(n))},V=function(e){var t=e.message,n=e.boardMatrix,c=e.exitExercise;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:t}),Object(h.jsx)(I,{matrix:n}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:c,children:"Back to Options"})]})},G=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).createBingoCell=function(t,n,c,s){return Object(h.jsx)(P,{row:n,column:c,card:t,side:e.props.cardDisplay,color:s,selectCard:e.selectCard})},e.selectCard=function(t,n,c){e.props.cards[e.state.round][e.props.termDisplay]===t[e.props.termDisplay]?e.executeAnswer(t,n,c,"green"):e.executeAnswer(t,n,c,"red")},e.executeAnswer=function(t,n,c,s){var r=Object(x.a)(e.state.boardMatrix),i=e.createBingoCell(t,n,c,s);r[n][c]=i,e.checkAnswer(r)},e.checkAnswer=function(t){var n=e.state.round+1;!function(e){var t=Object(x.a)(e).map((function(e){return e.map((function(e){return e.props.color}))}));return!![M(t),B(t),A(t),R(t)].find((function(e){return e}))}(t)?n>24?e.endGame("You lost, bummer.",t):e.setState({round:n,boardMatrix:t}):e.endGame("You won, yay!!!",t)},e.endGame=function(t,n){e.props.changeView(Object(h.jsx)(V,{message:t,boardMatrix:n,exitExercise:e.props.exitExercise}))},e.checkState=function(){console.log(e.state)},e.state={round:0,boardMatrix:[[],[],[],[],[]]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=v(Object(x.a)(this.props.cards));this.setState({boardMatrix:[t.slice(0,5).map((function(t,n){return e.createBingoCell(t,0,n,"yellow")})),t.slice(5,10).map((function(t,n){return e.createBingoCell(t,1,n,"yellow")})),t.slice(10,15).map((function(t,n){return e.createBingoCell(t,2,n,"yellow")})),t.slice(15,20).map((function(t,n){return e.createBingoCell(t,3,n,"yellow")})),t.slice(20).map((function(t,n){return e.createBingoCell(t,4,n,"yellow")}))]})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Bingo Exercise:"}),Object(h.jsxs)("div",{children:["( ",this.props.deckNames.join(", ")," )"]}),Object(h.jsxs)("h2",{children:["Round: ","".concat(this.state.round+1," / 25")]}),Object(h.jsxs)("h1",{children:["Term:  ",this.props.cards[this.state.round][this.props.termDisplay]]}),Object(h.jsx)(I,{matrix:this.state.boardMatrix}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:this.props.exitExercise,children:"Exit Exercise"})]})}}]),n}(c.Component),L=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).setPractice=function(){e.setState({view:Object(h.jsx)(g,{level:e.props.exercise.level,deckNames:e.props.exercise.deckNames,termDisplay:e.props.exercise.termDisplay,cardDisplay:e.props.exercise.cardDisplay,cards:e.props.exercise.cards,exitExercise:e.props.exitExercise})})},e.setMultipleChoice=function(){e.setState({view:Object(h.jsx)(k,{level:e.props.exercise.level,deckNames:e.props.exercise.deckNames,termDisplay:e.props.exercise.termDisplay,cardDisplay:e.props.exercise.cardDisplay,cards:v(e.props.exercise.cards),exitExercise:e.props.exitExercise,changeView:e.setNewView})})},e.setSpeedGame=function(){e.setState({view:Object(h.jsx)(N,{level:e.props.exercise.level,deckNames:e.props.exercise.deckNames,termDisplay:e.props.exercise.termDisplay,cardDisplay:e.props.exercise.cardDisplay,cards:v(e.props.exercise.cards),exitExercise:e.props.exitExercise,changeView:e.setNewView})})},e.setBingo=function(){var t=v(e.props.exercise.cards).slice(0,25);e.setState({view:Object(h.jsx)(G,{level:e.props.exercise.level,deckNames:e.props.exercise.deckNames,termDisplay:e.props.exercise.termDisplay,cardDisplay:e.props.exercise.cardDisplay,cards:t,exitExercise:e.props.exitExercise,changeView:e.setNewView})})},e.setActivity=function(t){switch(t){case"Practice":e.setPractice();break;case"Multiple Choice":e.setMultipleChoice();break;case"Speed Game":e.setSpeedGame();break;case"Bingo":e.setBingo();break;default:e.setState({view:Object(h.jsx)(p,{})})}},e.setNewView=function(t){e.setState({view:t})},e.state={view:Object(h.jsx)(p,{})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.exercise.activity;this.setActivity(e)}},{key:"render",value:function(){return Object(h.jsx)("div",{children:this.state.view})}}]),n}(c.Component),F=function(e){var t=e.exercise,n=e.beginExercise,c=e.displayOptions;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:["Level: ",t.level]}),Object(h.jsx)("h2",{children:"Deck(s): "}),Object(h.jsx)("div",{children:t.deckNames.join(" || ")}),Object(h.jsxs)("h2",{children:["Activity: ",t.activity]}),Object(h.jsx)("button",{onClick:function(){return n(t)},children:"Begin Exercise!"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:"-- OR --"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:c,children:"Back to Options"})]})},T=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Please wait while we fetch some data."}),Object(h.jsx)("h2",{children:"I'm using the free version of Heroku, so it might be slow."}),Object(h.jsx)("h2",{children:"Enjoy this dancing monkey while you wait..."}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"https://media.tenor.com/images/5effebfd97f4bcae26982b708c5f06b7/tenor.gif",alt:"dancing monkey"})})]})},Y=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).setDecks=function(t){e.setState({decks:t})},e.changeView=function(t){e.setState({view:t})},e.setExercise=function(t){var n=function(e){var t;return{activity:e.activity,level:e.level,termDisplay:e.displaySide,cardDisplay:"english"===e.displaySide?"spanish":"english",deckNames:(t=e.decks,t.map((function(e){return e.name}))),cards:u(e.decks)}}(t);j(n)&&e.setState({view:Object(h.jsx)(F,{exercise:n,beginExercise:e.beginExercise,displayOptions:e.displayOptions})})},e.displayOptions=function(){e.setState({view:Object(h.jsx)(O,{decks:e.state.decks,setExercise:e.setExercise})})},e.beginExercise=function(t){e.setState({view:Object(h.jsx)(L,{exercise:t,exitExercise:e.displayOptions,changeView:e.changeView})})},e.checkState=function(){console.log(e.state)},e.state={decks:[],view:Object(h.jsx)(T,{})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=Object(h.jsx)(b,{displayOptions:this.displayOptions});fetch("".concat("https://conexion-resource-mgmt.herokuapp.com/","api/decks")).then((function(e){return e.json()})).then((function(e){return e})).then((function(t){return e.setDecks(t)})).then((function(){return e.changeView(t)}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[this.state.view,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})}}]),n}(c.Component),q=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(Y,{})})}}]),n}(c.Component),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root")),z()}},[[16,1,2]]]);
//# sourceMappingURL=main.5462e5bc.chunk.js.map