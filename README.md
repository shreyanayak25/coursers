<html>
<head>
    <style>
        * {
    box-sizing: border-box;
}
body {
    margin: 0px;
}
h1 {
    text-align: center;
}
.cell {
    border: 1px solid black;
    background-color: gray;
}
.col {
    float: left;
    /*border: 3px solid black;
    background-color: gray;*/
    padding: 5px;
    width: 100%;
}
.col p.colheading {
    text-align: center;
    margin: 0px;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    width: auto;
    padding: 5px 40px 5px 40px;
    float: right;
    font-size: 2em;
    font-weight: bold;
}
p.text {
    clear: both;
    padding: 10px;
    margin-bottom: 0px;
}
@media (min-width: 992px) {
    .col-1 {
        width: 33%;
    }
    .col-2 {
        width: 33%;
    }
    .col-3 {
        width: 33%;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .col-1 {
        width: 50%;
    }
    .col-2 {
        width: 50%;
    }
    .col-3 {
        width: 100%;
    }
}
    </style>
</head>
    <title>coursera assignment 2</title>
    <body>
        <h1>Our Menu</h1>
        <div>
            <section class = "col col-1">  <div class="cell">  <p class="colheading" style="background-color: pink;">Chicken</p>
                <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.</p></div></section>
       
        <section class = "col col-2"><div class="cell"><p class="colheading" style="background-color: orange;">Beef</p>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.</p></div></section>
       
        <section class = "col col-3"><div class="cell"><p class="colheading" style="background-color: lightblue;">Sushi</p>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.</p></div></section>
        </div>

    </body>
</html>
