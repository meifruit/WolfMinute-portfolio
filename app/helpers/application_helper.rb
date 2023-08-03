module ApplicationHelper

  # def available_time
  #   users = [User.second, User.third]
  #   time_check = ["9~10", "10~11", "11~12", "12~13", "13~14", "14~15", "15~16", "16~17", "17~18"]
  #   avatime = []


  #   date = Date.today + 1
  #   bisstart0 = Time.local(2023, 5, 30, 9, 0).in_time_zone('Tokyo')
  #   bisend0 = Time.local(2023, 5, 30, 10, 0).in_time_zone('Tokyo')

    date = Date.today + 1
    bisstart = Time.local(date.year, )
    bisend = Time.local(date.year, )
    duration = 1


  #   bisstart1 = Time.local(2023, 5, 30, 10, 0).in_time_zone('Tokyo')
  #   bisend1 = Time.local(2023, 5, 30, 11, 0).in_time_zone('Tokyo')

  #   bisstart2 = Time.local(2023, 5, 30, 11, 0).in_time_zone('Tokyo')
  #   bisend2 = Time.local(2023, 5, 30, 12, 0).in_time_zone('Tokyo')

  #   bisstart3 = Time.local(2023, 5, 30, 12, 0).in_time_zone('Tokyo')
  #   bisend3 = Time.local(2023, 5, 30, 13, 0).in_time_zone('Tokyo')

  #   bisstart4 = Time.local(2023, 5, 30, 13, 0).in_time_zone('Tokyo')
  #   bisend4 = Time.local(2023, 5, 30, 14, 0).in_time_zone('Tokyo')

  #   bisstart5 = Time.local(2023, 5, 30, 14, 0).in_time_zone('Tokyo')
  #   bisend5 = Time.local(2023, 5, 30, 15, 0).in_time_zone('Tokyo')

  #   bisstart6 = Time.local(2023, 5, 30, 15, 0).in_time_zone('Tokyo')
  #   bisend6 = Time.local(2023, 5, 30, 16, 0).in_time_zone('Tokyo')

  #   bisstart7 = Time.local(2023, 5, 30, 16, 0).in_time_zone('Tokyo')
  #   bisend7 = Time.local(2023, 5, 30, 17, 0).in_time_zone('Tokyo')

  #   bisstart8 = Time.local(2023, 5, 30, 17, 0).in_time_zone('Tokyo')
  #   bisend8 = Time.local(2023, 5, 30, 18, 0).in_time_zone('Tokyo')


    # bisstart = Time.local(2023, 5, 30, 9, 0).in_time_zone('Tokyo')
    # bisend = Time.local(2023, 5, 30, 18, 0).in_time_zone('Tokyo')
    # duration = 1

    # date.between?(bisstart, bisend)

    # date.saturday?
    # date.sunday?

    # if user1.meetings? || user1.meetings.all { |meeting| meeting.start_date <= Time.now }
    # end
  #   loop do
  #     users.each do |user|
  #       user.meetings.each do |meeting|
  #         user.name = []
  #         if meeting.start_date <= Time.now
  #           if meeting.start_date.between?(bisstart0, bisend0)
  #             user.name << "9~10"
  #           end
  #         end

  #       end
  #   end
  #   end
  # end

    # + 3600
    # plus 1 hour
    # multiply duration

    # change array name to user's name
    # after checking each member's available time,
    # array1 & array2 & array 3 then can find same available time

    # meetings has start_date(with_time) and duration
    # select users as array
    # set business hour (9~18 on weekday only)
    # set duration
    # calculate available time for each users with(substruct like bishour - meeting time?)
    # find each users available time with comparing each available time

# using loop?

#   until finding available time

  # end
  def noun_project_icon(name, options = {})
    file_path = "#{name}.png"
    options[:class] ||= ""
    options[:class] << " noun-project-icon"
    options[:alt] ||= name.to_s.humanize
    options[:width] ||= "32px" # Set the width of the icon
    options[:height] ||= "32px"
    image_tag(file_path, options)
  end
end
