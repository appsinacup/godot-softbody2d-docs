---
sidebar_position: 3
---

# Shapes

Each region of the softbody is formed of shapes. In order to view the shapes, enable the **Show Shapes** checkbox on the **SoftBody2D** node:

![shapes](/img/about-regions/shapes.png)

The actual hierarchy inside the node is as follows:

- **RigidBody2D**: contains
    - **CollisionShape2D**
    - **Joint2D**

## Shape properties

The **Shape** parameters section contains:

- **Radius** property configures the size of the shape.
- **Shape Type** property configures the shape to be either **Circle** or **Rectangle**.
- **Margin Offset Edge** property configures how much the shapes should be pushed towards the center of the image. Using this usually gives better results if the shapes are just inside the texture, like this:

![Center Image](/img/about-shapes/center.png)
