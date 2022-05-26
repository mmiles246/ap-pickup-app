class TownEventsMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.town_events_mailer.town_event_posted.subject
  #
  def town_event_posted
    @greeting = "Hi"

    mail(
        from: 'michael.miles2468@gmail.com',
        to: User.last.email,
        subject: "New event posted!")
  end
end
