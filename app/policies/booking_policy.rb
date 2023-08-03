class BookingPolicy < ApplicationPolicy
  class Scope < Scope
    # NOTE: Be explicit about which records you allow access to!
    # def resolve
    #   scope.all
    # end
  end

  def edit?
    record.user == user || record.meeting.user == user
  end

  def update?
    record.user == user || record.meeting.user == user
  end

  def destroy?
    record.user == user || record.meeting.user == user
  end
end
