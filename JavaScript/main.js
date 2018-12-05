$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // 중앙에 원 하나 그리기
    // var c = Shape.Circle(200, 200, 50);
    // c.fillColor = 'green';

    // 바둑판 모양으로 원 그리기
    // var c;
    // for(var x=25; x<400; x+=50) {
    //     for(var y=25; y<400; y+=50) {
    //         c = Shape.Circle(x, y, 20);
    //         c.fillColor = 'green';
    //     }
    // }

    // 캔버스 클릭 시 원 생성
    // var tool = new Tool();

    // tool.onMouseDown = function(event) {
    //     var c = Shape.Circle(event.point.x, event.point.y, 20);
    //     c.fillColor = 'green';
    // };

    // 캔버스 클릭 시 원 생성 (x,y좌표를 객체로 넘김)
    // var tool = new Tool();

    // tool.onMouseDown = function(event) {
    //     var c = Shape.Circle(event.point, 20);
    //     c.fillColor = 'green';
    // };

    // 검은 배경원 및 hello world 텍스트 출력 추가
    var tool = new Tool();
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };

    paper.view.draw();
});