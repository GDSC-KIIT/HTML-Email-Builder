<script lang="ts">
	import type { List } from '../../utils/Elements';

	export let element: List;
	$: padding = `padding : ${element.padding.top}px ${element.padding.right}px ${element.padding.bottom}px ${element.padding.left}px`;
	$: fontWeight = `font-weight : ${element.fontWeight}`;
	$: fontSize = `font-size : ${element.fontSize}px`;
	$: textAlign = `text-Align : ${element.textAlign}`;
	$: color = `color : ${element.color}`;
	$: ListStyleType = `list-style-type: ${element.listStyleType}; list-style-position : inside`;
	$: listSpacing = `margin-top : ${element.listItemSpacing / 2}px; margin-bottom : ${element.listItemSpacing / 2}px`;
</script>

<div class="p-1">
	<ul
		class=""
		style={`${ListStyleType}; ${padding}; ${fontSize}; ${fontWeight}; ${textAlign}; ${color}`}
	>
		{#each element.listItems as item}
			<li style={`${listSpacing}`}>{item}</li>
		{/each}
	</ul>
</div>
