@SHOUTY-11 
Feature: Hear shout
  Description Field:
  Shouty allows users to "hear" other users "shouts" as long as they are close enough to each other.

  To do:
    - only shout to people within a certain distance

  # Thực hiện trước mỗi lần Scenario đỡ phải lặp lại các bước trùng 
  Background: 
    Given a person named Lucy
    And a person named Sean
  
  # Dùng để định dạng phân chia các Scenario rõ ràng méo có tác dụng logic
  # Nếu đặt Background trong Rule thì chỉ thực hiện Background trong Scenario của Rule đó
  Rule: 
    param (s) located
  
    Scenario: Listener is within range with m(s)
      Given Lucy is located 15ms from Sean
      When Sean shouts "free bagels at Sean's"
      Then Lucy hears Sean’s message

  Rule: 
    param no (s) located 
    # Kiểm thử "smoke", còn được gọi là kiểm thử "sanity"
    # Một loại kiểm thử nhanh chóng và đơn giản để đảm bảo rằng các chức năng cơ bản của hệ thống đều hoạt động như mong đợi.
    @smoke
    Scenario: Listener is within range with m
      Given Lucy is located 10m from Sean
      When Sean shouts "free bagels at Sean's"
      Then Lucy hears Sean’s message

  Rule: 
    param standing 
    @smoke @focus
    Scenario: Listener is within range replace standing
      Given Lucy is standing 100m from Sean
      When Sean shouts "free bagels at Sean's"
      Then Lucy hears Sean’s message

  Rule: Data table 
    
    Scenario: Listener is within range replace standing
      Given Lucy is standing 100m from Sean
      And people are located at 
        | person | distance |
        | Lucy   | 100m     |
        | Sean   | 100m     |
      When Sean shouts "free bagels at Sean's"
      Then Lucy hears Sean’s message