<script lang="ts">
	import { HeadingLevel } from '../../types/Element';
	import { Heading } from '../../utils/Elements';
	export let element: Heading;

	$: padding = `padding : ${element.padding.top}px ${element.padding.right}px ${element.padding.bottom}px ${element.padding.left}px`;
	$: fontWeight = `font-weight : ${element.fontWeight}`;
	$: fontSize = `font-size : ${element.fontSize}px`;
	$: textAlign = `text-Align : ${element.textAlign}`;
	$: color = `color : ${element.color}`;
</script>

<div
	class=""
	style={`${fontSize}; ${fontWeight}; ${padding}; ${color}; ${textAlign}; word-wrap : break-word`}
>
	{#if element.headingLevel === HeadingLevel.h1}
		<h1>{element.content}</h1>
	{:else if element.headingLevel === HeadingLevel.h2}
		<h2>{element.content}</h2>
	{:else}
		<h3>{element.content}</h3>
	{/if}
</div>
