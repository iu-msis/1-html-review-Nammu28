<?php

$num = 2;
$foo = $num." be";
$bar = "or not ".$num." be";



echo $foo.' '.$bar . "\n"; // browser puts it on same line despite n

echo $num*$num*$num; // doesn't add any additional white space


$arr = [
    "first" => "Namrata",
    "second" => "Joe",
    "best" => "Chipotle"

];

$arr2 = [1,1,2,3,5,8];

if(true) {
    echo "\nTRUE\n";
}

while (true) {
    // This way it doesn't actually do anything
    break; // end the while
}

#This is also a comment
/* and this
multi line
wowowoowow
*/
// echo "<ul>";
// foreach($arr as $key=>$val){
//     echo"<li> " .$key. " is " .$val. "</li>";
// }
// echo "</ul>";

function printAndEncode ($val) { // defining the function
    echo json_encode(
        $val,
        JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR // "|"  is binary or
    );
printAndEncode();

// Naming Conventions

//JS & PHP : camelCase

// PascalCase
// snake_case
// kebab_case

}

