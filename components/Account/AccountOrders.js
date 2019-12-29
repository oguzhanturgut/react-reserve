import { useRouter } from 'next/router';
import { Header, Accordion, Label, Segment, Icon, Button, List, Image } from 'semantic-ui-react';
import formatDate from '../../utils/formatDate';

function AccountOrders({ orders }) {
  const router = useRouter();

  const mapOrdersToPanels = orders =>
    orders.map(order => ({
      key: order_id,
      title: {
        content: <Label color='blue' content={formatDate(order.createdAt)} />,
      },
      content: {
        content: (
          <>
            <List.Header as='h3'>
              Total: $${order.total}
              <Label
                content={order.email}
                icon='mail'
                basic
                horizontal
                style={{ marginLeft: '1em' }}
              />
              <List>
                {order.products.map(product => (
                  <List.Item key='product.product._id'>
                    <Image avatar src={product.product.mediaUrl} />
                    <List.Content>
                      <List.Header>{product.product.name}</List.Header>
                      <List.Description>
                        {product.quantity} x ${product.product.price}
                      </List.Description>
                    </List.Content>
                    <List.Content floated='right'>
                      <Label tag color='red' size='tiny'>
                        {product.product.sku}
                      </Label>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </List.Header>
          </>
        ),
      },
    }));
  return (
    <>
      <Header as='h2'>
        <Icon name='folder open' />
        Order History
      </Header>
      {orders.length === 0 ? (
        <Segment inverted tertiary color='grey' textAlign='center'>
          <Header icon>
            <Icon name='copy outline' />
            No past orders.
          </Header>
          <div>
            <Button onClick={() => router.push('/')}>View Products</Button>
          </div>
        </Segment>
      ) : (
        <Accordion fluid styled exclusive={false} panels={mapOrdersToPanels(orders)} />
      )}
    </>
  );
}

export default AccountOrders;
