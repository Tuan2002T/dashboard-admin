require "test_helper"

class ProductStocksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get product_stocks_index_url
    assert_response :success
  end
end
