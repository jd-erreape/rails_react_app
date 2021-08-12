require 'rails_helper'

describe Api::V1::ProductsController, type: :controller do
  render_views

  describe '#index' do
    let!(:products) { 3.times.map { create(:product) } }

    before { do_index }

    it 'renders a 200 status code with application/json content type' do
      expect(response.status).to eq(200)
      expect(response.content_type).to include('application/json')
    end

    it 'provides a list of all the products in the system' do
      response_products = JSON.parse(response.body, { :symbolize_names => true })

      expect(response_products.length).to eq(3)
      # Verify first product
      expect(response_products.first[:code]).to eq(products.first.code)
      expect(response_products.first[:name]).to eq(products.first.name)
      expect(response_products.first[:price]).to eq(products.first.price)
    end

    def do_index
      get :index, format: :json
    end
  end
end