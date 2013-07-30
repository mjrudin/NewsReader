class ChangeTable2 < ActiveRecord::Migration
  def change
    change_column :entries, :guid, :text, :null => true
  end

end
