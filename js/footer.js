/*
 * @Author: your name
 * @Date: 2020-08-08 19:00:40
 * @LastEditTime: 2020-08-08 19:18:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ctr_phone/js/footer.js
 */
$(function(){
    $('footer li').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
    })


    $('.diaglog .closebtn').on('click',function(){
        $('.diaglog').hide()
    })
})