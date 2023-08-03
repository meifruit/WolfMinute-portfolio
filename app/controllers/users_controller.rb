class UsersController < ApplicationController
  before_action :set_user, only: [:card]
    def card
      render partial: 'users/card', locals: { user: @user }
    end

    private

    def set_user
      @user = User.find(params[:id])
      authorize @user
    end
end
