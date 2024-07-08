---
sidebar_position: 1
---

# Create a Softbody

A Softbody is squishy body created from an image. This tutorial is also available in the GitHub repo as a sample [samples/softbody2d/create-a-softbody](https://github.com/appsinacup/godot-softbody2d/tree/main/samples/softbody2d/create-a-softbody).

## Create a new SoftBody2D node

Create a new **2D Scene** in Godot. In the newly created scene go to the **Scene** tab create a new **SoftBody2D** node by right clicking on the root node and selecting **Add child node**.

![add child node](/img/create-a-softbody/add-child-node.png)


In the resulting window select the **SoftBody2D** node and select **Create**:

![new node](/img/create-a-softbody/new-node.png)


:::caution

In case you don't see the node, you probably forgot to [activate the addon](/docs/intro.md#activate-the-addon).

:::

### Setting a texture

Next, you need to set a **Texture** on the node. For this, click on the **Scene** tab on the left and select our newly created node (usually after creating the node it is already selected):

![select node](/img/create-a-softbody/select-node.png)

Next, on the **Inspector** tab, go to the **Polygon2D** section, expand the **Texture** property group and go to the **Texture** property (where it says `Texture <empty>`)

![texture property](/img/create-a-softbody/texture-property.png)

When you click the **Texture** dropdown, select **Quick Load** and then select `addons/softbody2d/softbody2d.svg`:

![texture quick load](/img/create-a-softbody/quick-load.png)

You should now see in the **2D scene view** the following:

![scene view](/img/create-a-softbody/scene-view.png)

In the **Scene** tab you can minimise the children of the **SoftBody2D** node by clicking the arrow button next to the node:

![minimise children](/img/create-a-softbody/minimise-children.png)

## Create a World Boundary

Next we need a ground so the softbody hits something and doesn't fall forever.

Create a **StaticBody2D** as child of the Root Node:

![static body](/img/create-a-softbody/static-body.png)

Then, create a child of this node (select the **StaticBody2D** node and click **Add Child Node**) of type **CollisionShape2D**:

![add child node](/img/create-a-softbody/add-collision-shape.png)

![collision shape 2d](/img/create-a-softbody/collision-shape-2d.png)

Next, select the node and in the **Inspector** change the **Shape** property to **New World Boundary Shape2D**:

![new world boundary shape](/img/create-a-softbody/new-world-boundary-shape2d.png)

Next, in the **2D scene view** move the **StaticBody2D** down. Select the **StaticBody2D** node in the **Scene** tab and select **Move Mode**:

![move mode](/img/create-a-softbody/move-mode.png)

Next, move the **StaticBody2D** node below the softbody by dragging it down:

![move below](/img/create-a-softbody/move-static-body2d.png)

## Try it out

Click the **Run Current Scene** button:

![run](/img/create-a-softbody/run.png)

:::note

In case you are asked to save the scene, select **Save**.

:::

If you did everything right, you will see the following:

![gif](/img/create-a-softbody/result.gif)
