angular.module('ioniccss', ['ngMaterial'])
  .config(['$compileProvider',
    function($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
    }
  ])
  .controller('AppCtrl', function($scope) {

    $scope.selected = [];
    $scope.toggle = function(item, list, type) {
      var idx = list.indexOf(item);
      if (idx > -1) list.splice(idx, 1);
      else list.push(item);
    };
    $scope.exists = function(item, list, type) {
      return list.indexOf(item) > -1;
    };

    $scope.clearCSS = function() {
      $scope.selected = [];
    }

    $scope.createCSS = function(selected) {
      //alert("CLicked!");
      //alert(selected);
      var len = selected.length || 0;
      if (len == 0) {
        //alert("No color selected!");
      } else {
        //alert(JSON.stringify(selected));
        var css = '';
        for (var i = 0; i < selected.length; i++) {
          var comma = '\n';
          if (css.length == 0) {
            comma = "";
          }
          css = css + comma + '.' + selected[i].type + '-' + selected[i].shadeNumber + '-bg, .button-' + selected[i].type + '-' + selected[i].shadeNumber + ', .bar .button-' + selected[i].type + '-' + selected[i].shadeNumber + ', .header-' + selected[i].type + '-' + selected[i].shadeNumber + ', .button-bar-' + selected[i].type + '-' + selected[i].shadeNumber + ', .bar-' + selected[i].type + '-' + selected[i].shadeNumber + ', .' + selected[i].type + '-' + selected[i].shadeNumber + '-border, .' + selected[i].type + '-' + selected[i].shadeNumber + '-bg:hover, .button-' + selected[i].type + '-' + selected[i].shadeNumber + ':hover, .bar .button-' + selected[i].type + '-' + selected[i].shadeNumber + ':hover, .header-' + selected[i].type + '-' + selected[i].shadeNumber + ':hover, .button-bar-' + selected[i].type + '-' + selected[i].shadeNumber + ':hover, .bar-' + selected[i].type + '-' + selected[i].shadeNumber + ':hover, .' + selected[i].type + '-' + selected[i].shadeNumber + '-border:hover, .' + selected[i].type + '-' + selected[i].shadeNumber + '-bg:active, .button-' + selected[i].type + '-' + selected[i].shadeNumber + ':active, .bar .button-' + selected[i].type + '-' + selected[i].shadeNumber + ':active, .header-' + selected[i].type + '-' + selected[i].shadeNumber + ':active, .button-bar-' + selected[i].type + '-' + selected[i].shadeNumber + ':active, .bar-' + selected[i].type + '-' + selected[i].shadeNumber + ':active, .' + selected[i].type + '-' + selected[i].shadeNumber + '-border:active, .' + selected[i].type + '-' + selected[i].shadeNumber + '-bg.activated, .button-' + selected[i].type + '-' + selected[i].shadeNumber + '.activated, .bar .button-' + selected[i].type + '-' + selected[i].shadeNumber + '.activated, .header-' + selected[i].type + '-' + selected[i].shadeNumber + '.activated, .button-bar-' + selected[i].type + '-' + selected[i].shadeNumber + '.activated, .bar-' + selected[i].type + '-' + selected[i].shadeNumber + '.activated, .' + selected[i].type + '-' + selected[i].shadeNumber + '-border.activated {   background-color: ' + selected[i].color + ';color: ' + selected[i].textColor + '; }' + '\n' + '.' + selected[i].type + '-' + selected[i].shadeNumber + ',.' + selected[i].type + '-' + selected[i].shadeNumber + ' * ,*.' + selected[i].type + '-' + selected[i].shadeNumber + ',.' + selected[i].type + '-' + selected[i].shadeNumber + ':hover,.' + selected[i].type + '-' + selected[i].shadeNumber + ':hover * , *.' + selected[i].type + '-' + selected[i].shadeNumber + ':hover,.' + selected[i].type + '-' + selected[i].shadeNumber + ':active,.' + selected[i].type + '-' + selected[i].shadeNumber + ':active * ,*.' + selected[i].type + '-' + selected[i].shadeNumber + ':active {color: ' + selected[i].color + ';}';
        }
        //alert(css);

        var blob = new Blob([css], {
          type: 'text/plain'
        });
        $scope.url = (window.URL || window.webkitURL).createObjectURL(blob);
      }
    }

    var RED = [{color:'#FFEBEE',textcolor:'#000',shadeNumber:'50'},{color:'#FFCDD2',textcolor:'#000',shadeNumber:'100'},{color:'#EF9A9A',textcolor:'#000',shadeNumber:'200'},{color:'#E57373',textcolor:'#000',shadeNumber:'300'},{color:'#EF5350',textcolor:'#FFF',shadeNumber:'400'},{color:'#F44336',textcolor:'#FFF',shadeNumber:'500'},{color:'#E53935',textcolor:'#FFF',shadeNumber:'600'},{color:'#D32F2F',textcolor:'#FFF',shadeNumber:'700'},{color:'#C62828',textcolor:'#FFF',shadeNumber:'800'},{color:'#B71C1C',textcolor:'#FFF',shadeNumber:'900'},{color:'#FF8A80',textcolor:'#000',shadeNumber:'A100'},{color:'#FF5252',textcolor:'#FFF',shadeNumber:'A200'},{color:'#FF1744',textcolor:'#FFF',shadeNumber:'A400'},{color:'#D50000',textcolor:'#FFF',shadeNumber:'A700'}];

    var DEEPPURPLE = [{color:'#EDE7F6',textcolor:'#000',shadeNumber:'50'},{color:'#D1C4E9',textcolor:'#000',shadeNumber:'100'},{color:'#B39DDB',textcolor:'#000',shadeNumber:'200'},{color:'#9575CD',textcolor:'#FFF',shadeNumber:'300'},{color:'#7E57C2',textcolor:'#FFF',shadeNumber:'400'},{color:'#673AB7',textcolor:'#FFF',shadeNumber:'500'},{color:'#5E35B1',textcolor:'#FFF',shadeNumber:'600'},{color:'#512DA8',textcolor:'#FFF',shadeNumber:'700'},{color:'#4527A0',textcolor:'#FFF',shadeNumber:'800'},{color:'#311B92',textcolor:'#FFF',shadeNumber:'900'},{color:'#B388FF',textcolor:'#000',shadeNumber:'A100'},{color:'#7C4DFF',textcolor:'#FFF',shadeNumber:'A200'},{color:'#651FFF',textcolor:'#FFF',shadeNumber:'A400'},{color:'#6200EA',textcolor:'#FFF',shadeNumber:'A700'}];

    var GREEN = [{color:'#E8F5E9',textcolor:'#000',shadeNumber:'50'},{color:'#C8E6C9',textcolor:'#000',shadeNumber:'100'},{color:'#A5D6A7',textcolor:'#000',shadeNumber:'200'},{color:'#81C784',textcolor:'#000',shadeNumber:'300'},{color:'#66BB6A',textcolor:'#000',shadeNumber:'400'},{color:'#4CAF50',textcolor:'#000',shadeNumber:'500'},{color:'#43A047',textcolor:'#FFF',shadeNumber:'600'},{color:'#388E3C',textcolor:'#FFF',shadeNumber:'700'},{color:'#2E7D32',textcolor:'#FFF',shadeNumber:'800'},{color:'#1B5E20',textcolor:'#FFF',shadeNumber:'900'},{color:'#B9F6CA',textcolor:'#000',shadeNumber:'A100'},{color:'#69F0AE',textcolor:'#000',shadeNumber:'A200'},{color:'#00E676',textcolor:'#000',shadeNumber:'A400'},{color:'#00C853',textcolor:'#000',shadeNumber:'A700'}];

    var INDIGO = [{color:'#E8EAF6',textcolor:'#000',shadeNumber:'50'},{color:'#C5CAE9',textcolor:'#000',shadeNumber:'100'},{color:'#9FA8DA',textcolor:'#000',shadeNumber:'200'},{color:'#7986CB',textcolor:'#FFF',shadeNumber:'300'},{color:'#5C6BC0',textcolor:'#FFF',shadeNumber:'400'},{color:'#3F51B5',textcolor:'#FFF',shadeNumber:'500'},{color:'#3949AB',textcolor:'#FFF',shadeNumber:'600'},{color:'#303F9F',textcolor:'#FFF',shadeNumber:'700'},{color:'#283593',textcolor:'#FFF',shadeNumber:'800'},{color:'#1A237E',textcolor:'#FFF',shadeNumber:'900'},{color:'#8C9EFF',textcolor:'#000',shadeNumber:'A100'},{color:'#536DFE',textcolor:'#FFF',shadeNumber:'A200'},{color:'#3D5AFE',textcolor:'#FFF',shadeNumber:'A400'},{color:'#304FFE',textcolor:'#FFF',shadeNumber:'A700'}];

    var ORANGE = [{color:'#FFF3E0',textcolor:'#000',shadeNumber:'50'},{color:'#FFE0B2',textcolor:'#000',shadeNumber:'100'},{color:'#FFCC80',textcolor:'#000',shadeNumber:'200'},{color:'#FFB74D',textcolor:'#000',shadeNumber:'300'},{color:'#FFA726',textcolor:'#000',shadeNumber:'400'},{color:'#FF9800',textcolor:'#000',shadeNumber:'500'},{color:'#FB8C00',textcolor:'#000',shadeNumber:'600'},{color:'#F57C00',textcolor:'#000',shadeNumber:'700'},{color:'#EF6C00',textcolor:'#FFF',shadeNumber:'800'},{color:'#E65100',textcolor:'#FFF',shadeNumber:'900'},{color:'#FFD180',textcolor:'#000',shadeNumber:'A100'},{color:'#FFAB40',textcolor:'#000',shadeNumber:'A200'},{color:'#FF9100',textcolor:'#000',shadeNumber:'A400'},{color:'#FF6D00',textcolor:'#000',shadeNumber:'A700'}];

    var BLUE = [{color:'#E3F2FD',textcolor:'#000',shadeNumber:'50'},{color:'#BBDEFB',textcolor:'#000',shadeNumber:'100'},{color:'#90CAF9',textcolor:'#000',shadeNumber:'200'},{color:'#64B5F6',textcolor:'#000',shadeNumber:'300'},{color:'#42A5F5',textcolor:'#000',shadeNumber:'400'},{color:'#2196F3',textcolor:'#FFF',shadeNumber:'500'},{color:'#1E88E5',textcolor:'#FFF',shadeNumber:'600'},{color:'#1976D2',textcolor:'#FFF',shadeNumber:'700'},{color:'#1565C0',textcolor:'#FFF',shadeNumber:'800'},{color:'#0D47A1',textcolor:'#FFF',shadeNumber:'900'},{color:'#82B1FF',textcolor:'#000',shadeNumber:'A100'},{color:'#448AFF',textcolor:'#FFF',shadeNumber:'A200'},{color:'#2979FF',textcolor:'#FFF',shadeNumber:'A400'},{color:'#2962FF',textcolor:'#FFF',shadeNumber:'A700'}];

    this.RED = (function() {
      var tilesRED = [];
      for (var i = 0; i < RED.length; i++) {
        tilesRED.push({
          color: RED[i].color,
          textColor: RED[i].textcolor,
          shadeNumber: RED[i].shadeNumber,
          type: 'assertive'
        });
      }
      return tilesRED;
    })();

    this.DEEPPURPLE = (function() {
      var tilesDEEPPURPLE = [];
      for (var i = 0; i < DEEPPURPLE.length; i++) {
        tilesDEEPPURPLE.push({
          color: DEEPPURPLE[i].color,
          textColor: DEEPPURPLE[i].textcolor,
          shadeNumber: DEEPPURPLE[i].shadeNumber,
          type: 'royal'
        });
      }
      return tilesDEEPPURPLE;
    })();


    this.GREEN = (function() {
      var tilesGREEN = [];
      for (var i = 0; i < GREEN.length; i++) {
        tilesGREEN.push({
          color: GREEN[i].color,
          textColor: GREEN[i].textcolor,
          shadeNumber: GREEN[i].shadeNumber,
          type: 'balanced'
        });
      }
      return tilesGREEN;
    })();

    this.INDIGO = (function() {
      var tilesINDIGO = [];
      for (var i = 0; i < INDIGO.length; i++) {
        tilesINDIGO.push({
          color: INDIGO[i].color,
          textColor: INDIGO[i].textcolor,
          shadeNumber: INDIGO[i].shadeNumber,
          type: 'positive'
        });
      }
      return tilesINDIGO;
    })();

    this.ORANGE = (function() {
      var tilesORANGE = [];
      for (var i = 0; i < ORANGE.length; i++) {
        tilesORANGE.push({
          color: ORANGE[i].color,
          textColor: ORANGE[i].textcolor,
          shadeNumber: ORANGE[i].shadeNumber,
          type: 'energized'
        });
      }
      return tilesORANGE;
    })();

    this.BLUE = (function() {
      var tilesBLUE = [];
      for (var i = 0; i < BLUE.length; i++) {
        tilesBLUE.push({
          color: BLUE[i].color,
          textColor: BLUE[i].textcolor,
          shadeNumber: BLUE[i].shadeNumber,
          type: 'calm'
        });
      }
      return tilesBLUE;
    })();

  });
