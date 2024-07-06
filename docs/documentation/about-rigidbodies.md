---
sidebar_position: 4
---

# Rigidbodies

Each region of the softbody is formed of shapes connected through joints. In order to view the shapes, enable the **Show Shapes** checkbox on the **SoftBody2D** node:
![shapes](/img/about-regions/shapes.png)

The actual hierarchy inside the node is as follows:

- **RigidBody2D**: contains
    - **CollisionShape2D**
    - **Joint2D**
