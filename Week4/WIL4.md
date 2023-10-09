# 2023-2-Frontend-Study
2023년 2학기에 진행되는 프론트엔드 스터디 커리큘럼 과제 제출입니다.

***

## 📋 오늘의 목표는? 📋

✅ Vanilla JS로 계산기 구현하기 ‼️

***

### 🦒: 어떤 기능을 구현해야 할까❔

#### 🌱: 사칙연산을 수행하는 계산기를 만들자

▶ operate 함수를 만든 뒤, 각각의 case에 대해 사칙연산을 정의함

#### 🌲: C 버튼을 누르면 계산이 초기화되도록

▶ clearData 함수를 만든 뒤, 해당하는 변수를 NULL로 지정하여 값을 초기화함

***

### 🦁: 어떤 요구사항을 구현해야 할까❔

#### 🍃: 폰트를 적용해보자

1. '눈누' 사이트에서 마음에 드는 폰트를 고른다 
2. 웹 폰트 주소를 복사한다
3. css에 붙여넣고, body에도 적용한다

#### 🍂: 실제 계산기에서 사용하는 기호를 사용해보자

1. 'entitycode' 사이트에 들어간다 
2. math 버튼을 누른다
3. 필요한 문자의 Entity Number를 복사하여 적용한다

***

### 🦔: 나에게 나타난 고난들 ...

#### 🌵: 계산기의 구성원들이 한 줄로 나타난다❗
각각의 줄에 맞게 태그로 감싸주었음에도 여전히 한 줄로 나타남
-> html의 td 태그를 이용해보았음에도 해결이 되지 않음
((아직 원인을 찾지 못함 😭😭))

#### 🐝: 아직도 이벤트에 어리둥절 중인 💤
- event: 어떤 사건
- event target: 이벤트가 일어날 객체 ex) 버튼을 누르면 새로운 창이 열리는 객체가 있을 때, 버튼이 event target이 됨
- event type: 이벤트 종류로, click, 스크롤, 마우스의 움직임
- event handler: 이벤트가 발생했을 때 동작하는 코드
- event 등록 방법
    1. inline(이벤트를 이벤트 대상의 태그 속성으로 지정)
        <input type="button" onclick="alert('Hello world');" value="button" />
    2. property listener
        이벤트 대상에 해당하는 객체의 프로퍼티로 이벤트를 등록
    3. addEventListener()  ((추천 방식 👍👍👍))
        여러 개의 이벤트 핸들러 등록 가능
            ```
            <input type="button" id="target" value="button" />
            <script>
                var t = document.getElementById('target');
                t.addEventListener('click', function(event){
                    alert('Hello world, '+event.target.value);
                });
            </script>
            ```
 &nbsp;&nbsp;&nbsp;[설명] getElementById: html에 있는 target이라는 id를 갖고 있는 객체를 t변수에 리턴함

 &nbsp;&nbsp;&nbsp;&nbsp;-> t는 addEventListener()를 호출하고 첫 번째 인자로 event type(여기서는 click)을 가짐

 &nbsp;&nbsp;&nbsp;&nbsp;-> 이벤트가 수행되면 두 번째 인자의 함수가 호출되면서 함수 코드 실행됨

***

## 😢 이번 주차를 공부한 뒤 느낀점은❔😢

💬: 아직도 혼자서 실습을 하기엔 벅차서 다른 코드들도 보고, 코드를 쓰기도 해봤지만 잘 안되어서 멘토님의 예시의 개발자 도구를 보면서 이해했다. 큰 틀은 이해가 되는데, 정확하게 쓰기에 아직 자바스크립트에 미숙한 것 같다. 자바스크립트 문법을 다시 한 번 더 복습하고, 여러 예제 문제들도 풀어서 체화를 한 뒤 다시 도전해야함을 느꼈다. 