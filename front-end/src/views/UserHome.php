<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>
        <?php echo date("Y/m/d") . "<br>";?>
    </div>
    <?php
        $mgr = new ConnectionManager();
        $conn = $mgr->getConnection();
        $sql = 'select * from ....... ';
        $stmt = $conn->prepare($sql);        
        $stmt ->setfetchMode(PDO::FETCH_ASSOC);

        $stmt ->execute();

        $stmt ->fetch();  #only returns u 1 row of the record in the format of an associative array. Key is depending on header of database
        $row = $stmt;   #$row is the associate array

        $address = []; 
        $type = [];
        $time = [];
        while ($row = $stmt->fetch()){
            $address = $row['address'];
            $type = $row['type'];
            $time = $row['time'];
        }

        $stmt -> closeCursor();
        $conn = null;
        for ($i = 0; $i < count($address); $i++){
            echo "<div>
                <p>".$address[$i]."</p>
                <br>
                <p>".$type[$i]."</p>&nbsp;<p>".$time[$i]."</p>
            </div>";
        }
    ?>
    
    
</body>
</html>