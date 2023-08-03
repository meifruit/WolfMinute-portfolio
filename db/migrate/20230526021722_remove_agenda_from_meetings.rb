class RemoveAgendaFromMeetings < ActiveRecord::Migration[7.0]
  def change
    remove_column :meetings, :agenda, :text
  end
end
