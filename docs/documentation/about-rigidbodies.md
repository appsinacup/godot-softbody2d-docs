---
sidebar_position: 4
---

# Rigidbodies

Each shape of the softbody has as parent a rigidbody. The actual hierarchy inside the node is as follows:

- **RigidBody2D**: contains
    - **CollisionShape2D**
    - **Joint2D**

## Rigidbodies properties

The **RigidBody** parameter section contains options to change properties of the rigidbody. All options are per every rigidbody:
- **Mass**: Makes the softbody heavier by changing the mass of every rigidbody. Make sure to also update the joint properties, otherwise the softbody will collapse in itself.
- **Gravity Scale**: Controls the gravity scale of every rigidbody.
- **Physics Material Override**: Controls the material override property of every rigidbody. Use this to make the softbody slippery or bouncy.
- **Rigibody Scene**: A scene with a **PhysicsBody2D** node that will be reused as the rigidbody to create. This is useful if you want to add a custom script on the rigidbodies created.

