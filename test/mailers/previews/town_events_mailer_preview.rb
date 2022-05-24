# Preview all emails at http://localhost:3000/rails/mailers/town_events_mailer
class TownEventsMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/town_events_mailer/town_event_posted
  def town_event_posted
    TownEventsMailer.town_event_posted
  end

end
