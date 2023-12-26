<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//require(APPPATH . "/third_party/sendgrid-php/sendgrid-php.php");

class Mailer {
  protected $CI;

  public function __construct(){
    $this->CI =& get_instance();
  }

  
  public function send($content, $subject, $to){
    $this->CI->load->library('email');


    $config = array(
      'protocol'  => 'sendmail',
      'smtp_host' => 'smtp.hostinger.com',
      'smtp_port' => 465,
      'smtp_user' => 'info@integratic.redesystemco.com',
      'smtp_pass' => '@Integratic123',
      'mailtype'  => 'html',
      'charset'   => 'utf-8',
      'wordwrap' => TRUE,
  );

    $this->CI->email->initialize($config);
    $this->CI->email->set_mailtype("html");
    $this->CI->email->set_newline("\r\n");

    $this->CI->email->to($to);
    $this->CI->email->from('info@integratic.redesystemco.com','IntegraTic');
    $this->CI->email->subject($subject);
    $this->CI->email->message($content);

    try {
      //Send email

      if ($this->CI->email->send()) {
        return true;
      } else {
        die($this->CI->email->print_debugger());
          //Do whatever you want if failed 
          return false;
      }
    } catch (Exception $e) {
      echo $e->getMessage();
    }
  }
}