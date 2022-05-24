require "test_helper"

class TownEventsMailerTest < ActionMailer::TestCase
  test "town_event_posted" do
    mail = TownEventsMailer.town_event_posted
    assert_equal "Town event posted", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
